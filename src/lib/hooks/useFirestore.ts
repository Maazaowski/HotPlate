import { useCallback } from 'react';
import { doc, getDoc, collection, getDocs, query, where, orderBy, QueryConstraint } from 'firebase/firestore';
import { db } from '../firebase';
import { toast } from 'react-hot-toast';

export function useFirestore() {
  const getDocument = useCallback(async <T>(collectionName: string, id: string): Promise<T | null> => {
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as T;
      }
      return null;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error fetching document: ${error.message}`);
      }
      return null;
    }
  }, []);

  const getCollection = useCallback(async <T>(
    collectionName: string,
    constraints: QueryConstraint[] = []
  ): Promise<T[]> => {
    try {
      const collectionRef = collection(db, collectionName);
      const q = query(collectionRef, ...constraints);
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as T[];
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error fetching collection: ${error.message}`);
      }
      return [];
    }
  }, []);

  return {
    getDocument,
    getCollection,
  };
}