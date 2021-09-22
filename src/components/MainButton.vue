<template>
  <div>
    <div>
      {{ inputValue }}
    </div>
    <input class="border-3" v-model="inputValue" />
    <p class="text-h1 border-3 rounded-xl border-blue-500">{{ msg }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

defineProps<{ msg: string }>();
defineEmits(['click']);

let inputValue = ref(123);
</script>

<style scoped lang="postcss">
div {
  p {
    color: red;
    background-color: blue;
  }
}
</style>
