<script setup>
import TopComponent from './components/TopComponent.vue';

</script>

<template>
  <TopComponent />
  <RouterView />
</template>

<style scoped>
#CardList {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem 0;
  padding: 0;
  border: 1px solid pink;
}
</style>
