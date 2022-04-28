import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import storage from './utils/storage.js'
import './index.css'

const app = createApp(App)

app.use(router)
app.use(storage)
app.mount('#app')
