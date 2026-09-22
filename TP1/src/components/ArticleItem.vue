<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    article:Object
})
</script>

<template>
    <RouterLink class="CardLink" :to="`/article/${article.id}`">
        <section class="CardBox">
            <h2>{{ article.name }}</h2>
        </section>
    </RouterLink>
</template>

<style scoped>
.CardLink {
    text-decoration: none;
    color: black;
}

.CardBox {      
    border: .1rem solid black;
    background-color: rgb(172, 170, 170);
    padding: 1rem 2rem;
    min-width: 10rem;
    min-height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.CardBox:hover {
    border: .1rem solid red;
    color: red;
    cursor: pointer;
}
</style>