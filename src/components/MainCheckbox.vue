<template>
  <input
    type="checkbox"
    class="rounded-xl flex justify-center items-center"
    :checked="modelValue"
    @click="$emit('update:modelValue', !modelValue)"
  />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
defineEmits({
  'update:modelValue': (payload: boolean): boolean => {
    if (payload !== undefined) {
      return true;
    }
    return false;
  },
});
defineProps({
  modelValue: {
    type: Boolean,
  },
});
// import { computed, toRefs } from 'vue';
// const props = defineProps({
//   isAutoWidth: {
//     type: Boolean,
//     default: true,
//   },
//   isAutoHeight: {
//     type: Boolean,
//     default: true,
//   },
//   size: {
//     type: String,
//     default: 'm',
//     validator: (value: string) => ['s', 'm', 'l', 'xl'].includes(value),
//   },
//   color: {
//     type: String,
//     default: 'primary',
//     validator: (value: string) =>
//       ['primary', 'secondary', 'tertiary'].includes(value),
//   },
// });

// const { color } = toRefs(props);

// const computedBgColor = computed((): string => {
//   return `bg-${color.value}`;
// });
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
