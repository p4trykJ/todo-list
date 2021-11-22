<template>
  <main class="container mx-auto">
    <add-todo></add-todo>
    <todos-list :items="incompletedTodos" title="Todo"></todos-list>
    <todos-list :items="completedTodos" title="Completed"></todos-list>
  </main>
</template>

<script setup lang="ts">
import AddTodo from '@/components/AddTodo.vue';
import TodosList from '@/components/TodosList.vue';
import { getTodos, todos } from '@/firebase/todos';
import { computed, onMounted } from 'vue';

const completedTodos = computed(() => {
  return todos.value.filter((todo) => todo.isCompleted);
});

const incompletedTodos = computed(() => {
  return todos.value.filter((todo) => !todo.isCompleted);
});

onMounted((): void => {
  getTodos();
});
</script>
