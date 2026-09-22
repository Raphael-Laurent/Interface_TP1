<script setup>
import { ref } from 'vue'
import { articles } from '../data/data.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const description = ref('')
const price = ref(null)
const image = ref('')

function addArticle() {
    if (name.value.trim() === '') return
    if (price.value === null || price.value ===  '' || price.value < 0) return

    const id = articles[articles.length - 1].id + 1

    articles.push({
        id,
        name: name.value.trim(),
        description: description.value.trim(),
        price: price.value,
        image: image.value.trim() || '#',
    })

    router.push('/admin')
}

</script>

<template>
    <section>
        <form @submit.prevent="addArticle">
            <input v-model="name" placeholder="Name of the item">
            <input v-model="description" placeholder="description">
            <input v-model.number="price" type="number" placeholder="price">
            <button type="submit" >Submit</button>
        </form>
    </section>

</template>

<style scoped></style>