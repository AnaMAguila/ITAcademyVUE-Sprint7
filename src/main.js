import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap  v5.2.3 (https://getbootstrap.com/)
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router).mount('#app')
