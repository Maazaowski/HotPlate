import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../lib/firebase';

// Menu Items
export async function getMenuItems() {
  const querySnapshot = await getDocs(collection(db, 'menuItems'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function addMenuItem(data: any) {
  return await addDoc(collection(db, 'menuItems'), data);
}

export async function updateMenuItem(id: string, data: any) {
  const docRef = doc(db, 'menuItems', id);
  return await updateDoc(docRef, data);
}

export async function deleteMenuItem(id: string) {
  const docRef = doc(db, 'menuItems', id);
  return await deleteDoc(docRef);
}

// Events
export async function getEvents() {
  const querySnapshot = await getDocs(collection(db, 'events'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function addEvent(data: any) {
  return await addDoc(collection(db, 'events'), data);
}

// Staff
export async function getStaff() {
  const querySnapshot = await getDocs(collection(db, 'staff'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function addStaff(data: any) {
  return await addDoc(collection(db, 'staff'), data);
}

// Image Upload
export async function uploadImage(file: File, path: string) {
  const storageRef = ref(storage, `${path}/${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}