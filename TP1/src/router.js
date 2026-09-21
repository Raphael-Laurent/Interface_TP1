import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import ArticleView from './components/ArticleView.vue'

const routes = [
    {path: '/', component: HomeView},
    {path: '/article/:id', component: ArticleView},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router