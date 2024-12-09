import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './config';
import { toast } from 'react-hot-toast';

const RETRY_DELAY = 1000;
const MAX_RETRIES = 3;

async function retryOperation<T>(
  operation: () => Promise<T>,
  retries = MAX_RETRIES
): Promise<T> {
  try {
    return await operation();
  } catch (error: any) {
    if (retries > 0 && (error.code === 'unavailable' || error.code === 'network-request-failed')) {
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return retryOperation(operation, retries - 1);
    }
    throw error;
  }
}

export async function initializeDefaultAdmin() {
  const email = 'admin@hotplate.com';
  const password = 'Admin@123';

  try {
    // Check if admin already exists
    const adminDoc = await retryOperation(() => 
      getDoc(doc(db, 'users', 'admin'))
    );

    if (adminDoc.exists()) {
      return;
    }

    // Create admin user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Create user document with retry mechanism
    await retryOperation(() =>
      setDoc(doc(db, 'users', userCredential.user.uid), {
        email,
        role: 'admin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
    );

    console.log('Default admin user created successfully');
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('Admin user already exists');
    } else {
      console.error('Error creating admin user:', error);
      toast.error('Failed to initialize admin user. Please check your connection and try again.');
    }
  }
}

export async function loginWithEmail(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    const userDoc = await retryOperation(() =>
      getDoc(doc(db, 'users', userCredential.user.uid))
    );
    
    if (!userDoc.exists() || userDoc.data().role !== 'admin') {
      await signOut(auth);
      throw new Error('Unauthorized access');
    }

    return userCredential.user;
  } catch (error: any) {
    if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
      throw new Error('Invalid email or password');
    } else if (error.code === 'auth/too-many-requests') {
      throw new Error('Too many login attempts. Please try again later.');
    } else {
      console.error('Login error:', error);
      throw new Error('Failed to log in. Please check your connection and try again.');
    }
  }
}

export async function logoutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Logout error:', error);
    throw new Error('Failed to log out. Please try again.');
  }
}

// Initialize admin user when the module loads
initializeDefaultAdmin().catch(console.error);