import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import ArticleView from './components/ArticleView.vue'
import FormulaireArticle from './components/FormulaireArticle.vue'
import AdminView from './components/AdminView.vue'

const routes = [
    {path: '/', component: HomeView},
    {path: '/ajouter', component: FormulaireArticle},
    {path: '/article/:id', component: ArticleView},
    {path: '/admin', component:AdminView},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router