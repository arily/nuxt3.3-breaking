<template>
  <div>
    {{ config }}
  </div>
</template>

<script setup lang="ts">
const config = useAppConfig()

config.deep
</script>

<style scoped>

</style>