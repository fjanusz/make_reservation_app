import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import pl from "./locales/pl.json"
import en from "./locales/en.json"

const pinia = createPinia()
const i18n = createI18n({
  locale: 'pl',
  fallbackLocale: 'en',
  messages: { pl, en }
})
const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.mount('#app')