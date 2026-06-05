import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap-icons/font/bootstrap-icons.css"
import { router } from './routers/index.js'
import { createPinia } from 'pinia'
createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
