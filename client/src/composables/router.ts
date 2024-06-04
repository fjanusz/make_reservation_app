import { createMemoryHistory, createRouter } from 'vue-router';
import { StaticPagesPaths } from './staticPagesPaths.ts';
import Home from '../pages/Home.vue';
import AboutUs from '../pages/AboutUs.vue';

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
  }
}

const routes = [
  {
    path: StaticPagesPaths.PAGE_HOME,
    component: Home,
    meta: { title: 'metaTitle.home' },
  },
  {
    path: StaticPagesPaths.PAGE_ABOUT,
    component: AboutUs,
    meta: { title: 'metaTitle.about' },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
