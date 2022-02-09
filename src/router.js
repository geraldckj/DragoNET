import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './Pages/Admin/MainPage.vue';
import AllUsers from './Pages/Admin/AllUsers.vue';
import AllEvents from './Pages/Admin/AllEvents.vue';
import UserEvents from './Pages/User/UserEvents.vue';
import UserProfile from './Pages/User/UserProfile.vue'
import NotFound from './Pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', redirect: '/mainpage' },
        {path: '/Mainpage', component: MainPage },
        {path: '/AllEvents', component: AllEvents },
        {path: '/PersonnelOverview', component: AllUsers },
        {path: '/UserEvents', component: UserEvents },
        {path: '/UserProfile', component: UserProfile },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;