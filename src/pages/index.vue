<template>
  <div>
    {{ config }}
  </div>
</template>

<script setup lang="ts">
const config = useAppConfig()


config.key
</script>

<style scoped>

</style>