<template>
  <button class="btn rounded-l bg-primary" :class="[computedBgColor, size]">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
const props = defineProps({
  size: {
    type: String,
    default: 'medium',
    validator: (value: string) => ['small', 'medium', 'large'].includes(value),
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value: string) =>
      ['primary', 'secondary', 'tertiary'].includes(value),
  },
});

const { color } = toRefs(props);

const computedBgColor = computed((): string => {
  return `bg-${color.value}`;
});
</script>

<style scoped lang="postcss">
.btn {
  &.small {
    height: 15px;
    width: 15px;
  }
  &.medium {
    height: 20px;
    width: 20px;
  }
  &.large {
    height: 30px;
    width: 30px;
  }
}
</style>
