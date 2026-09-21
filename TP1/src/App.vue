<script setup>
import Navigation from './components/Navigation.vue';

</script>

<template>
  <Navigation />
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
