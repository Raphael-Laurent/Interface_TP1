<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    article:Object
})
</script>

<template>
    <RouterLink :to="`/article/${article.id}`">
        <section class="CardBox">
            <h2>{{ article.name }}</h2>
        </section>
    </RouterLink>
</template>

<style scoped>
.CardBox {      
    border: .1rem solid black;
    background-color: rgb(172, 170, 170);
    padding: 1rem 2rem;
    min-width: 14rem;
    min-height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.CardBox:hover {
    color: red;
    cursor: pointer;
}
</style>