import {
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { ordersCollection } from '../database/collections';
import type { Order } from '../database/schema';

export async function getOrders() {
  const snapshot = await getDocs(query(ordersCollection, orderBy('createdAt', 'desc')));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Order));
}

export async function getOrder(id: string) {
  const docRef = doc(ordersCollection, id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } as Order : null;
}

export async function createOrder(data: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) {
  const now = new Date().toISOString();
  const newOrder = {
    ...data,
    createdAt: now,
    updatedAt: now,
  };
  const docRef = await addDoc(ordersCollection, newOrder);
  return { id: docRef.id, ...newOrder };
}

export async function updateOrder(id: string, data: Partial<Order>) {
  const docRef = doc(ordersCollection, id);
  const updates = {
    ...data,
    updatedAt: new Date().toISOString(),
  };
  await updateDoc(docRef, updates);
  return { id, ...updates };
}

export async function getCustomerOrders(customerId: string) {
  const q = query(ordersCollection, where('customerId', '==', customerId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Order));
}