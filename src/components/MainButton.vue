<template>
  <div>
    {{ msg }}
    <p class="text-h1">KURDE</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ msg: string }>();

defineEmits(["click"]);
</script>

<style scoped lang="postcss">
div {
  p {
    color: red;
    background-color: blue;
  }
}
</style>
