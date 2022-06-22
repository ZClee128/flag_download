const routers = [
    {
        name: 'AppDownload',
        path: '/',
        component: () => import('../components/AppDownload.vue')
    },
    {
        name: 'download',
        path: '/download',
        component: () => import('../components/download.vue')
    },
    
];
export default routers