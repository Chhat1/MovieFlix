import { createRouter, createWebHistory } from "vue-router";
import Browse from "../components/pages/Browse.vue";
import Home from "../components/pages/Home.vue";
import MyList from "../components/pages/MyList.vue";
import Details from "../components/pages/Details.vue";
import Success from "../components/pages/Success.vue"

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
        path: "/details/:id",
        component: Details
    },
    {
        path: "/success",
        component: Success
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})