<script setup>
import TacosClicker from './TacosClicker.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()
const tacos = computed(() => store.state.tacos.tacos)

onMounted(() => {
    interval = setInterval(() => {
        store.commit('tacos/ajouterTacos', store.state.tacos.autoIncrement)
    }, 3000)
})
</script>

<template>
    <TacosClicker />
    <p>Tacos: {{ tacos }}</p>
</template>

<style scoped></style>