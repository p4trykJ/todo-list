<template>
  <main class="w-full h-full">
    <rounded-button color="primary" size="xl" known-icon="add">
    </rounded-button>
    <todo-list-view></todo-list-view>
  </main>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import RoundedButton from '@/components/RoundedButtonIcon.vue';
import TodoListView from '@/views/TodoListView.vue';
</script>

<style lang="scss">
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
