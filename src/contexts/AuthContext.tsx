import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db, waitForFirebaseInit } from '../lib/firebase/config';
import { loginWithEmail, logoutUser } from '../lib/firebase/auth';
import { toast } from 'react-hot-toast';
import { retryOperation, isOfflineError } from '../lib/firebase/retryUtils';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const checkUserRole = useCallback(async (user: User) => {
    try {
      const userDoc = await retryOperation(() => 
        getDoc(doc(db, 'users', user.uid))
      );

      if (userDoc.exists() && userDoc.data().role === 'admin') {
        setUser(user);
      } else {
        await auth.signOut();
        setUser(null);
        toast.error('Unauthorized access');
      }
    } catch (error) {
      console.error('Error checking user role:', error);
      
      if (isOfflineError(error)) {
        toast.error('Network error. Please check your connection.');
      } else {
        toast.error('Error verifying credentials');
        await auth.signOut();
        setUser(null);
      }
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    const initialize = async () => {
      try {
        await waitForFirebaseInit();
        
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (!mounted) return;

          if (user) {
            await checkUserRole(user);
          } else {
            setUser(null);
          }
          setLoading(false);
        });

        return () => {
          mounted = false;
          unsubscribe();
        };
      } catch (error) {
        console.error('Auth initialization error:', error);
        setLoading(false);
      }
    };

    initialize();
  }, [checkUserRole]);

  const login = async (email: string, password: string) => {
    try {
      await loginWithEmail(email, password);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Failed to log in');
      }
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Failed to log out');
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}