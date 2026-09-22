<script setup>
import { panier } from '../data/data.js'
import ListeArticles from './ListeArticles.vue';

</script>

<template>
    <h1>Your shopping cart</h1>
    <section>
        <ListeArticles :list="panier" />
    </section>
</template>

<style scoped>
h1 {
    font-size: 1.5rem;
}</style>