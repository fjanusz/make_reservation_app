import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { i18nConfig } from './composables/i18n.ts';
import './assets/index.css';
import Default from './layout/Default.vue';
import router from './composables/router.ts';

const { i18n } = i18nConfig();
const pinia = createPinia();
const app = createApp(Default);

app.use(pinia);
app.use(i18n);
app.use(router);
app.mount('#app');
