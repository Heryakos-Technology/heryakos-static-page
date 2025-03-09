import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'
import ServicePage from '../views/ServicePage.vue'
import BlogPage from '@/views/BlogPage.vue'
import PortfolioPage from '@/views/PortfolioPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about2',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/service',
      name: 'ServicePage',
      component: ServicePage
    },
    {
      path: '/blog',
      name: 'BlogPage',
      component: BlogPage
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/works',
      name: 'PortfolioPage',
      component: PortfolioPage
    },
    {
      path: '/animate',
      name: 'Animation',
      component: Animation
    },

  ],
});

export default router;

{/* <div class="lg:flex flex-col gap-y-4  hidden  2xl:gap-x-4 ">
        <div v-for="(project, index) in projects" :key="index" class="space-y-1"
          :class="{ 'font-bold text-2xl ': index === currentProjectIndex }">
          <h1 @click="goToSpecificProject(index + 1)" class="text-xl cursor-pointer min-[1200px]:text-2xl 2xl:text-3xl">
            {{
              project?.name }}</h1>
          <div class="flex gap-x-4 items-center mr-20  border-b-2 border-black pb-3">
            <p class="font-semibold text-lg ">LEARN MORE</p>
            <img class="size-4" :src="arrowUpRight" alt="" srcset="">
          </div>
        </div>
      </div> */}