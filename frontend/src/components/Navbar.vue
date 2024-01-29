<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="navbar-bcgov">
    <div class="text-4xl font-bold">{{ title }}</div>
  </div>
</template>

<style scoped>
</style>
