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
    {{ search }} hello
    <BarreRecherche />
    <p>List of plants :</p>
    <ListeArticles :list="articleFiltered"/>
  </section>
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
