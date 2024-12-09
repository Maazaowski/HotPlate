import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, doc, setDoc, connectFirestoreEmulator, enableMultiTabIndexedDbPersistence } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { toast } from 'react-hot-toast';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Enable offline persistence
enableMultiTabIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    toast.error('Multiple tabs open. Offline mode can only be enabled in one tab at a time.');
  } else if (err.code === 'unimplemented') {
    toast.error('The current browser does not support offline persistence.');
  }
});

// Initialize default admin user
export async function initializeDefaultAdmin() {
  const email = 'admin@hotplate.com';
  const password = 'Admin@123';

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Create user document in Firestore with retry mechanism
    const createUserDoc = async (retries = 3) => {
      try {
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          email,
          role: 'admin',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        console.log('Default admin user created successfully');
      } catch (error) {
        if (retries > 0 && error instanceof Error && error.message.includes('offline')) {
          setTimeout(() => createUserDoc(retries - 1), 1000);
        } else {
          throw error;
        }
      }
    };

    await createUserDoc();
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('Admin user already exists');
    } else {
      console.error('Error creating admin user:', error);
      toast.error('Failed to initialize admin user');
    }
  }
}

// Initialize emulators in development
if (import.meta.env.DEV) {
  try {
    connectAuthEmulator(auth, 'http://localhost:9099');
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectStorageEmulator(storage, 'localhost', 9199);
  } catch (error) {
    console.error('Error connecting to emulators:', error);
  }
}

// Initialize admin user when the app starts
initializeDefaultAdmin().catch(console.error);