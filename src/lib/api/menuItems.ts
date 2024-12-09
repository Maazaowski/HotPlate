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
import { menuItemsCollection } from '../database/collections';
import type { MenuItem } from '../database/schema';

export async function getMenuItems() {
  const snapshot = await getDocs(menuItemsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as MenuItem));
}

export async function getMenuItem(id: string) {
  const docRef = doc(menuItemsCollection, id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } as MenuItem : null;
}

export async function createMenuItem(data: Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'>) {
  const now = new Date().toISOString();
  const newItem = {
    ...data,
    createdAt: now,
    updatedAt: now,
  };
  const docRef = await addDoc(menuItemsCollection, newItem);
  return { id: docRef.id, ...newItem };
}

export async function updateMenuItem(id: string, data: Partial<MenuItem>) {
  const docRef = doc(menuItemsCollection, id);
  const updates = {
    ...data,
    updatedAt: new Date().toISOString(),
  };
  await updateDoc(docRef, updates);
  return { id, ...updates };
}

export async function deleteMenuItem(id: string) {
  const docRef = doc(menuItemsCollection, id);
  await deleteDoc(docRef);
  return id;
}