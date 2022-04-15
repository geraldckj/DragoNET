import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './Pages/Admin/MainPage.vue';
import AllUsers from './Pages/Admin/AllUsers.vue';
import AllEvents from './Pages/Admin/AllEvents.vue';
import UserEvents from './Pages/User/UserEvents.vue';
import UserProfile from './Pages/User/UserProfile.vue'
import LoginPage from './Pages/Auth/LoginPage.vue'
import RegisterPage from './Pages/Auth/RegisterPage.vue'
import NotFound from './Pages/NotFound.vue';
import createNewEvent from './Pages/Admin/CreateNewEvent.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', redirect: '/mainpage' },
        {path: '/Mainpage', component: MainPage },
        {path: '/AllEvents', component: AllEvents },
        {path: '/AllUsers', component: AllUsers },
        {path: '/UserEvents', component: UserEvents },
        {path: '/UserProfile', component: UserProfile },
        {path: '/Login', component: LoginPage },
        {path: '/Register', component: RegisterPage },
        {path: '/CreateNewEvent', component: createNewEvent },        
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

export default router;