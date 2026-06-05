import { createRouter, createWebHistory } from "vue-router";
import Browse from "../components/pages/Browse.vue";
import Home from "../components/pages/Home.vue";
import MyList from "../components/pages/MyList.vue";


const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/browse",
        component: Browse
    },
    {
        path: "/mylist",
        component: MyList
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})