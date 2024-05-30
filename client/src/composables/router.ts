import { createMemoryHistory, createRouter } from 'vue-router';
import { StaticPagesPaths } from './staticPagesPaths.ts';
import Home from '../pages/Home.vue';
import AboutUs from '../pages/AboutUs.vue';

const routes = [
  { path: StaticPagesPaths.PAGE_HOME, component: Home },
  { path: StaticPagesPaths.PAGE_ABOUT, component: AboutUs },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
