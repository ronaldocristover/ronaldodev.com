import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home | Ronaldo Cristover Octavianus',
            description: 'Software Engineer portfolio showcasing enterprise-scale solutions, projects, and experience.'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router

// Dynamic SEO: set title and description per route
router.beforeEach((to, _from, next) => {
    const defaultTitle = 'Ronaldo Cristover Octavianus - Software Engineer Portfolio'
    const defaultDesc = 'Software Engineer crafting enterprise-scale solutions. 10+ years in finance, telco, and e-commerce.'
    document.title = to.meta?.title || defaultTitle
    const descTag = document.querySelector('meta[name="description"]')
    if (descTag) {
        descTag.setAttribute('content', to.meta?.description || defaultDesc)
    }
    next()
})


