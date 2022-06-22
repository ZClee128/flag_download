import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import routes from './router'    //导入router目录下的router.js
 
const router = createRouter({
    // history: createWebHistory(),     //路由模式
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router      //导出