<template>
  <button
    class="btn rounded-md bg-secondary px-2 py-1 w-auto"
    :class="[
      computedBgColor,
      size,
      { '!w-auto': isAutoWidth },
      { '!h-auto': isAutoHeight },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
const props = defineProps({
  isAutoWidth: {
    type: Boolean,
    default: true,
  },
  isAutoHeight: {
    type: Boolean,
    default: true,
  },
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
