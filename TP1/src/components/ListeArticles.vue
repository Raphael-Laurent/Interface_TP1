<script setup>
import ArticleItem from './ArticleItem.vue'

defineProps({
    list: Array,
})
</script>

<template>
    <div id="CardList">
      <ArticleItem v-for="article in list" :article="article" />
    </div>
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