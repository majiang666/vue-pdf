import Vue from 'vue';
import VueRouter  from 'vue-router';
const Home = () => import('@/components/Home');
const Page = () => import('@/components/Page');
Vue.use(VueRouter);
const router = new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/',
            name:"home",
            component:Home
        },
        {
            path:'/page',
            name:"page",
            component:Page
        }
    ]
});
export default router;