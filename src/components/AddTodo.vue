<template>
  <form @submit="addTodoLocal">
    <ul>
      <li>
        <label for="text">Name:</label>
        <input v-model="inputValue" name="text" type="text" />
      </li>
      <li>
        <button type="submit">Dodaj</button>
      </li>
    </ul>
  </form>
</template>

<script lang="ts" setup>
import { addTodo } from '@/firebase/todos';
import { ref } from 'vue';

let inputValue = ref('');

const addTodoLocal = async (e: Event): Promise<void> => {
  try {
    e.preventDefault();
    await addTodo(inputValue.value);
    (e.target as HTMLFormElement).reset();
  } catch (error) {
    alert(error);
  }
};
</script>

<style scoped lang="postcss">
div {
  p {
    color: red;
    background-color: blue;
  }
}
</style>
