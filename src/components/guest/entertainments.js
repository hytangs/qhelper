import { createRouter, createWebHistory } from 'vue-router'
import Album from './entertainments/Album'
import Podcast from './entertainments/Podcast'
import Shows from './entertainments/Shows'


const routes = [
    {
        path: '/entertain/albums',
        name: 'Albums',
        component: Album
    },
    
    {
        path: '/entertain/podcasts',
        name: 'Podcasts',
        component: Podcast
    },

    {
        path: '/entertain/shows',
        name: 'Shows',
        component: Shows
    }
]

const entertainrouter = createRouter({
    history: createWebHistory(),
    routes
})

export default entertainrouter