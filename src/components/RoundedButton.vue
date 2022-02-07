<template>
  <button
    class="btn rounded-md px-2 py-1 flex justify-center items-center"
    :class="[
      size,
      {
        '!w-auto': isAutoWidth,
        '!h-auto': isAutoHeight,
        [computedBgColor]: !outlined,
        outlined,
      },
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
  outlined: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value: string) =>
      ['primary', 'secondary', 'tertiary'].includes(value),
  },
});

const { color, isAutoHeight, isAutoWidth, outlined } = toRefs(props);

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
    height: 40px;
    width: 40px;
  }
}
</style>
