import { Todo } from '@/models/Todo';
import { firebaseDb } from '@/services/firebase';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  writeBatch,
} from '@firebase/firestore';
import { ref } from 'vue';

const todosCollection = collection(firebaseDb, 'todos');

const todos = ref<Todo[]>([]);

const getTodos = async (): Promise<void> => {
  try {
    const querySnapshot = await getDocs(todosCollection);
    todos.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Todo[];
  } catch (error) {
    alert(error);
  }
};

const addTodo = async (todo: Todo): Promise<void> => {
  try {
    const docRef = await addDoc(todosCollection, todo);
    console.log('Document written with ID: ', docRef.id);
    todos.value.push(todo);
  } catch (error) {
    alert(error);
  }
};

const updateTodo = async (id: string, data: Todo): Promise<void> => {
  try {
    const batch = writeBatch(firebaseDb);
    const ref = doc(firebaseDb, 'todos', id);
    batch.update(ref, data as { [key: string]: any });
    await batch.commit();
  } catch (error) {
    alert(error);
  }
};

export { todos, getTodos, addTodo, updateTodo };
