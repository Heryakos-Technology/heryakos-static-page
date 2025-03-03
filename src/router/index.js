import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD
import ContactUs from '../views/ContactUs.vue'
=======
import ServicePage from '../views/ServicePage.vue'

>>>>>>> 3ece1e4a420435bba45f5dfbf787ec76953707bb

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
<<<<<<< HEAD
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs,
=======
      path: '/service',
      name: 'ServicePage',
      component: ServicePage,
    },

    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
>>>>>>> 3ece1e4a420435bba45f5dfbf787ec76953707bb
    },
    
  ],
})

export default router
