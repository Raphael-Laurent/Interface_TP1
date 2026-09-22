import { reactive } from 'vue'

export const articles = reactive([
  { id: 1, name: 'Cactus', description: 'Green cactus', price: 10},
  { id: 2, name: 'Bonzai', description: 'Small bonsai tree', price: 20},
  { id: 3, name: 'Succulent', description: 'Small succulent plant', price: 15},
  
])

export const panier = reactive([])