<script setup>
import { useRoute } from 'vue-router';
import { articles, panier } from '../data/data.js';
import { computed } from 'vue';

const route = useRoute();

const article = computed(()  =>
    articles.find(a => a.id === Number(route.params.id))
)

const dejaAjoute = computed(() => {
    if (!article.value) return false
    return panier.find(a => a.id === article.value.id) !== undefined
})

function ajouterPanier() {
    if (!dejaAjoute.value) {
        panier.push(article.value)
    }
}

function supprimerPanier() {
    if (dejaAjoute.value) {
        const index = panier.findIndex(a => a.id === article.value.id)
        if (index !== -1) {
            panier.splice(index, 1)
        }
    }
}

</script>

<template>
    <section v-if="article">
    <h1>{{ article.name }}</h1>

    <p>{{ article.price }}</p>

    <p>{{ article.description }}</p>

    <button v-if="!dejaAjoute" @click="ajouterPanier">Add to your cart</button>
    <button v-else @click="supprimerPanier">Delete from your cart</button>
    </section>

</template>

<style scoped></style>