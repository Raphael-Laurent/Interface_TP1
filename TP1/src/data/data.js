import { reactive } from 'vue'

export const articles = reactive([
  { id: 1, name: 'Cactus', description: 'Green cactus', price: 10 },
  { id: 2, name: 'Bonzai', description: 'Small bonsai tree', price: 20 },
  { id: 3, name: 'Succulent', description: 'Small succulent plant', price: 15 },
  { id: 4, name: 'Ficus', description: 'Ficus tree without fruits', price: 50 },
  { id: 5, name: 'Aloe Vera', description: 'Aloe vera plant with gel', price: 12 },
  { id: 6, name: 'Lavander', description: 'Lavender plant with great smell', price: 10 },
  { id: 7, name: 'Basilic', description: 'Fresh herb plant', price: 5}
])

export const panier = reactive([])