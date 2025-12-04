<script setup lang="ts">

const handleClick = () => {
  console.log('button clicked');
}
</script>

<template>
 <an-button type="primary" size="small" @click="handleClick" :use-throttle='true'>test</an-button>

 <an-button-group>
    <an-button type="success">Success</an-button>
    <an-button type="info">Next Page<an-icon icon="arrow-right" style="margin-left: 8px" /></an-button>
    <an-button type="warning">Warning</an-button>
    <an-button type="danger">Danger</an-button>
 </an-button-group>
</template>

<style scoped>

</style>
