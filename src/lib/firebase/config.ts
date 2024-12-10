import { initializeApp, FirebaseError } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { 
  getFirestore, 
  enableMultiTabIndexedDbPersistence,
  connectFirestoreEmulator,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager
} from 'firebase/firestore';
import { getStorage, connectStorageEmulator, ref } from 'firebase/storage';
import { toast } from 'react-hot-toast';
import { retryOperation } from './retryUtils';

const requiredEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
] as const;

for (const envVar of requiredEnvVars) {
  if (!import.meta.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase with enhanced offline support
const app = initializeApp(firebaseConfig);

console.log('Firebase Config:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain
});

// Initialize Firestore with persistent cache
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});

console.log('Firestore initialized');

import { getDatabase } from 'firebase/database';
import { ref as databaseRef } from 'firebase/database';
const database = getDatabase(app);
const connectedRef = databaseRef(database, '.info/connected');
onValue(connectedRef, (snap) => {
  console.log('Connection state:', snap.val() ? 'connected' : 'disconnected');
});

export const auth = getAuth(app);
export const storage = getStorage(app);

// Connect to emulators in development
if (import.meta.env.DEV) {
  try {
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectStorageEmulator(storage, 'localhost', 9199);
  } catch (error) {
    console.error('Error connecting to emulators:', error);
  }
}

// Enable offline persistence with enhanced retry mechanism
async function setupOfflinePersistence() {
  try {
    await retryOperation(async () => {
      await enableMultiTabIndexedDbPersistence(db);
    });
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === 'failed-precondition') {
        toast.error('Multiple tabs open. Offline mode limited to one tab.');
      } else if (error.code === 'unimplemented') {
        toast.error('Your browser doesn\'t support offline features.');
      } else {
        console.error('Persistence setup error:', error);
        toast.error('Failed to enable offline support.');
      }
    }
  }
}

setupOfflinePersistence().catch(console.error);

export async function waitForFirebaseInit(): Promise<void> {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged(() => {
      unsubscribe();
      resolve();
    });
  });
}

import { enableNetwork, disableNetwork } from 'firebase/firestore';
import { onValue } from 'firebase/database';

// Add this function to handle connection state
export async function handleConnectionState() {
  try {
    await enableNetwork(db);
    console.log('Firebase connection enabled');
  } catch (error) {
    console.error('Firebase connection error:', error);
    // Optionally disable network to prevent constant retries
    await disableNetwork(db);
  }
}
