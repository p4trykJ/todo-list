<template>
  <main>
    <todos-list></todos-list>
    <add-todo msg="msgValue"></add-todo>
  </main>
</template>

<script setup lang="ts">
import AddTodo from '@/components/AddTodo.vue';
import TodosList from '@/components/TodosList.vue';
</script>
