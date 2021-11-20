import { Todo } from './../models/Todo';
import { firebaseDb } from '@/services/firebase';
import { collection, DocumentData, getDocs } from '@firebase/firestore';

const todosCollection = collection(firebaseDb, 'items');

const getTodos = async (): Promise<DocumentData[]> => {
  const querySnapshot = await getDocs(todosCollection);
  return querySnapshot.docs.map((doc) => doc.data()) as Todo[];
};

export { getTodos };
