<script setup>
const search = defineModel()
</script>

<template>
    <section>
        <input type="textfield" placeholder="Search..." v-model="search"/>
    </section>
</template>

<style scoped></style>