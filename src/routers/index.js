import { createRouter, createWebHistory } from "vue-router";
import Browse from "../components/pages/Browse.vue";
import Home from "../components/pages/Home.vue";
import MyList from "../components/pages/MyList.vue";
import Details from "../components/pages/Details.vue";


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
    },
    {
        path: "/details",
        component: Details
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})