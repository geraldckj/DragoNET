import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './Pages/Admin/MainPage.vue';
import NotFound from './Pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', redirect: '/mainpage'},
        {path: '/mainpage', component: MainPage},
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;