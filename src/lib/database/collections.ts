import { collection } from 'firebase/firestore';
import { db } from '../firebase';

export const menuItemsCollection = collection(db, 'menuItems');
export const blogPostsCollection = collection(db, 'blogPosts');
export const reviewsCollection = collection(db, 'reviews');
export const usersCollection = collection(db, 'users');
export const customersCollection = collection(db, 'customers');
export const ordersCollection = collection(db, 'orders');
export const transactionsCollection = collection(db, 'transactions');