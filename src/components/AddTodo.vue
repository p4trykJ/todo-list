<template>
  <div>
    <form
      class="border-orange-600 border-t-1 mt-10 pt-2"
      @submit="addTodoLocal"
    >
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
    <form></form>
  </div>
</template>

<script lang="ts" setup>
import { addTodo } from '@/firebase/todos';
import { ref } from 'vue';

defineProps({
  msg: {
    type: String,
    default: 'aaa',
  },
});
defineEmits(['click']);

let inputValue = ref('');

// eslint-disable-next-line no-undef
const addTodoLocal = async (e: SubmitEvent): Promise<void> => {
  try {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    await addTodo({ text: form.text.value, isCompleted: false });
    form.reset();
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
