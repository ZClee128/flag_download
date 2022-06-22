import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'

createApp(App).use(router).mount('#app')

// new Vue({
//     router,
//     render: h => h(App)
// }).$mount('#app')
