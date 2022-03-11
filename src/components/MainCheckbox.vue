<template>
  <input
    type="checkbox"
    class="rounded-xl flex justify-center items-center"
    :checked="modelValue"
    @click="$emit('update:modelValue', !modelValue)"
  />
</template>

<script lang="ts" setup>
interface Props {
  modelValue: boolean;
}

interface Emits {
  (e: 'update:modelValue', value: boolean): boolean;
}

defineEmits<Emits>();
defineProps<Props>();
</script>

<style scoped lang="scss">
input[type='checkbox'] {
  width: 30px !important;
  height: 30px !important;
  margin: 5px;
  appearance: none;
  outline: 2px solid lightblue;
  box-shadow: none;
  font-size: 2em;

  &:checked::after {
    content: '✔';
    color: red;
  }
}
</style>
