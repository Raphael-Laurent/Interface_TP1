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

<style scoped></style>