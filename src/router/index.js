import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Form from '../views/Form.vue';
import Resultaten from "@/views/Resultaten";
import Subsidie from "@/views/Subsidie";
import Login from "@/views/Login";
import Profile from "@/views/Profile";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/form',
        component: Form
    },
    {
        path: '/resultaten',
        component: Resultaten
    },
    {
        path: '/subsidie/:id',
        component: Subsidie
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router