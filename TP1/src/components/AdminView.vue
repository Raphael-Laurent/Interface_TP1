<script setup>
import { articles } from '../data/data.js';

function deleteItem(id) {
    const index = articles.findIndex(a => a.id === id)
    if(index !== -1) {
        articles.splice(index, 1)
    }
}
</script>

<template>
    <RouterLink class="link" to="/ajouter">Add an item</RouterLink>
    <table id="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="article in articles" :key="article.id">
                <td>{{ article.name }}</td>
                <td class="description">{{ article.description }}</td>
                <td>{{ article.price }}</td>
                <td><button @click="deleteItem(article.id)">Delete</button></td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
#table {
    border-collapse: collapse;
    width: 100%;
}

#table th,
#table td {
    border: .05rem solid black;
    padding: .5rem 1rem;
    text-align: left;
}

#table .description {
    max-width: 20rem;
    white-space: normal; 
    word-wrap: break-word;
}

#table tbody tr:nth-child(odd) {
    background-color: #ed4b7399;
}

.link {
  text-decoration: none;
  color: black;
  background-color: #63c89c;
  padding: .5rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
}

.link:hover {
  color: #e61e50;
}</style>