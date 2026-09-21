<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { articles } from '../data/data.js';
import { computed } from 'vue';

const route = useRoute();

const article = computed(()  =>
    articles.find(a => a.id === Number(route.params.id))
)
</script>

<template>
    <section v-if="article">
    <h1>{{ article.name }}</h1>

    <!-- image-->

    <p>{{ article.price }}</p>

    <p>{{ article.description }}</p>
    </section>
    <section v-else>
        HEllo
    </section>

    <RouterLink to="/">Back to home</RouterLink>
</template>

<style scoped></style>