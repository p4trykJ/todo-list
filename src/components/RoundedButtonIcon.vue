<template>
  <RoundedButton
    :color="color"
    :is-auto-height="false"
    :is-auto-width="false"
    :size="size"
  >
    <slot>
      {{ computedKnownIcon }}
    </slot>
  </RoundedButton>
</template>

<script lang="ts" setup>
import RoundedButton from '@/components/RoundedButton.vue';
import { computed, toRefs } from 'vue';

const props = defineProps({
  knownIcon: {
    type: String,
    default: '',
    validator: (value: string) =>
      ['back', 'forward', 'add', 'dots', 'checked'].includes(value),
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

const { knownIcon } = toRefs(props);

const iconsDict: { [x: string]: string } = {
  back: '<',
  forward: 'chevron-right',
  add: '+',
  dots: 'ellipsis-h',
  checked: 'check',
};

const computedKnownIcon = computed((): string => {
  const icon = knownIcon.value;
  return iconsDict[icon] || icon;
});
</script>

<style scoped lang="scss">
.btn {
  &.s {
    font-size: 10px;
  }

  &.m {
    font-size: 15px;
  }

  &.l {
    font-size: 20px;
  }

  &.xl {
    font-size: 25px;
  }
}
</style>
