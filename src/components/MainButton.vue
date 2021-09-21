<template>
  <div>
    {{ msg }}
    <p class="text-h1 border-3 rounded-xl border-blue-500">KURDE</p>
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
