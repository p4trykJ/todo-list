<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <form>
        <span>
          <input v-model="item.text" @change="updateTodoItem(item.id, item)" />
        </span>
        <span
          ><input
            v-model="item.isCompleted"
            class="dark:text-green-400"
            type="checkbox"
            @change="updateTodoItem(item.id, item)"
        /></span>
      </form>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { updateTodo } from '@/firebase/todos';
import { Todo } from '@/models/Todo';
import { PropType } from 'vue';

defineProps({
  items: {
    type: Array as PropType<Todo[]>,
    default: () => [],
  },
  title: {
    type: String,
    required: true,
  },
});

const updateTodoItem = async (id: string, todo: Todo) => {
  try {
    await updateTodo(id, todo);
  } catch (error) {
    alert(error);
  }
};
</script>
