import {
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
} from 'firebase/firestore';
import { customersCollection } from '../database/collections';
import type { Customer } from '../database/schema';

export async function getCustomers() {
  const snapshot = await getDocs(customersCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Customer));
}

export async function getCustomer(id: string) {
  const docRef = doc(customersCollection, id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } as Customer : null;
}

export async function createCustomer(data: Omit<Customer, 'id' | 'createdAt' | 'updatedAt'>) {
  const now = new Date().toISOString();
  const newCustomer = {
    ...data,
    createdAt: now,
    updatedAt: now,
  };
  const docRef = await addDoc(customersCollection, newCustomer);
  return { id: docRef.id, ...newCustomer };
}

export async function updateCustomer(id: string, data: Partial<Customer>) {
  const docRef = doc(customersCollection, id);
  const updates = {
    ...data,
    updatedAt: new Date().toISOString(),
  };
  await updateDoc(docRef, updates);
  return { id, ...updates };
}