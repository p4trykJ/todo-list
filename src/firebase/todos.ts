import { firebaseDb } from '@/firebase';
import { Todo } from '@/models/Todo';
import {
  addDoc,
  collection,
  doc,
  getDocs,
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

const addTodo = async (text: string): Promise<void> => {
  try {
    const todo = { isCompleted: false, text };
    const { id } = await addDoc(todosCollection, todo);
    todos.value.push({ ...todo, id });
  } catch (error) {
    alert(error);
  }
};

const updateTodo = async (id: string, data: Todo): Promise<void> => {
  try {
    const batch = writeBatch(firebaseDb);
    const ref = doc(firebaseDb, 'todos', id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    batch.update(ref, data as { [x: string]: any });
    await batch.commit();
  } catch (error) {
    alert(error);
  }
};

export { todos, getTodos, addTodo, updateTodo };
