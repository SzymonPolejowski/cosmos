import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

if (localStorage.getItem("stars") === null) localStorage.setItem("stars", undefined)

let app = createApp(App)

app.config.devtools = true

app.use(router).mount('#app')
