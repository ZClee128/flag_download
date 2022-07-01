import { createApp, Vue } from 'vue'
import router from './router/index'
import App from './App.vue'
import Bridge from './config/bridge.js'
import Vconsole from 'vconsole'

let vConsole = new Vconsole()
export default vConsole

const app = createApp(App).use(router);

app.config.globalProperties.$bridge = Bridge

app.mount('#app');
// new Vue({
//     router,
//     render: h => h(App)
// }).$mount('#app')
