<script setup lang="ts">

const handleClick = () => {
  console.log('button clicked');
}
</script>

<template>
 <an-button type="primary" size="small" @click="handleClick" useThrottle='false'>test</an-button>
</template>

<style scoped>

</style>
