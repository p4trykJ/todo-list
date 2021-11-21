<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <form>
        <span>
          <input v-model="todo.text" @change="updateTodoItem(todo.id, todo)" />
        </span>
        <span
          ><input
            v-model="todo.isCompleted"
            type="checkbox"
            @change="updateTodoItem(todo.id, todo)"
        /></span>
      </form>
    </li>
  </ul>
  {{ todos }}
</template>

<script setup lang="ts">
import { getTodos, todos, updateTodo } from '@/firebase/todos';
import { Todo } from '@/models/Todo';
import { onMounted } from 'vue';

// const getItems = async () => {
// await getTodos();
// };

const updateTodoItem = async (id: string, todo: Todo) => {
  try {
    await updateTodo(id, todo);
  } catch (error) {
    alert(error);
  }
};

onMounted(getTodos);
</script>
