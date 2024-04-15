import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";
import PageViewer from "./views/PageViewer.vue";
import CreatePage from "./views/CreatePage.vue";
import Pages from "./views/Pages.vue";
import PageList from "./views/PageList.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/:index?', 
            component: PageViewer,
            props: true
        },
        {
            path: '/pages',
            component: Pages,
            children: [
                { path:'', component: PageList },
                { path:'create', component: CreatePage }
            ]
        },
        {
            path: '/create',
            component: CreatePage
        }
    ]
})

export default router;