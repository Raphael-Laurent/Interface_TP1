<script setup>
const search = defineModel()
</script>

<template>
    <section>
        <input id="searchBar" placeholder="Search..." v-model="search"/>
    </section>
</template>

<style scoped>
#searchBar {
    border: .05rem solid black;
    border-radius: 0;
    width: 20rem;
    height: 2rem;
    padding: 0 .5rem;
    margin: 0 0 1rem 0;
}
</style>