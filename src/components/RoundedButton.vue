<template>
  <button class="btn rounded-md bg-primary" :class="[computedBgColor, size]">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
const props = defineProps({
  size: {
    type: String,
    default: 'm',
    validator: (value: string) => ['s', 'm', 'l', 'xl'].includes(value),
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

<style scoped lang="scss">
.btn {
  &.s {
    height: 15px;
    width: 15px;
  }

  &.m {
    height: 20px;
    width: 20px;
  }

  &.l {
    height: 30px;
    width: 30px;
  }

  &.xl {
    height: 45px;
    width: 45px;
  }
}
</style>
