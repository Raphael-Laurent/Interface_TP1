<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
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
    <div id="utilityBox">
      <BarreRecherche v-model="search" />
      <RouterLink class="link" to="/ajouter">Add an item</RouterLink>
    </div>
    <ListeArticles :list="articleFiltered"/>
  </section>
</template>

<style scoped>
#utilityBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
}

.link {
  text-decoration: none;
  color: black;
  background-color: grey;
  padding: .5rem 1rem;
}

.link:hover {
  color: red;
}

#CardList {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem 0;
  padding: 0;
  border: 1px solid pink;
}
</style>
