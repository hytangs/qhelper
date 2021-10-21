import { createRouter, createWebHistory } from 'vue-router'
import album from '@/components/entertainments/album.vue'
import podcast from '@/components/entertainments/podcast.vue'
import shows from '@/components/entertainments/shows.vue' 


const routes = [
    {
        path: '/albums',
        name: 'Albums',
        component: album
    },
    
    {
        path: '/podcasts',
        name: 'Podcasts',
        component: podcast
    },

    {
        path: '/shows',
        name: 'Shows',
        component: shows
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router