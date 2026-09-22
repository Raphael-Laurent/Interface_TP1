<script setup>
import { ref, computed } from 'vue'
import { articles } from '../data/data.js';
import ListeArticles from './ListeArticles.vue';
import BarreRecherche from './BarreRecherche.vue';

const search = ref('')

const articleFiltered = computed(() =>
  articles.filter(a =>
    a.name.toLowerCase().includes(search.value.trim().toLowerCase())
  )
)
</script>

<template>
  <section>
    <BarreRecherche v-model="search" />
    <ListeArticles :list="articleFiltered"/>
  </section>
</template>

<style scoped>


</style>
