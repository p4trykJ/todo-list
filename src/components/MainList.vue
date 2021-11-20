<template>
  <ul>
    <li v-for="todo in todos" :key="todo.name">
      <span>{{ todo.text }}</span>
      <span><input v-model="todo.isCompleted" type="checkbox" /></span>
    </li>
  </ul>
  {{ todos }}
</template>

<script setup lang="ts">
import { Todo } from '@/models/Todo';
import { getTodos } from '@/services/todosItems';
import { ref, onMounted } from 'vue';

const todos = ref<Todo[]>([]);

const getItems = async () => {
  const todosArr = await getTodos();
  todos.value = todosArr;
};

onMounted(getItems);
</script>
