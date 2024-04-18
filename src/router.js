import { createRouter, createWebHistory } from 'vue-router';
import AppShop from './pages/AppShop.vue';
import AppDetail from './pages/AppDetail.vue';
const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: AppShop
},
{
path: '/project/:id',
name: 'project.show',
component: AppDetail
},
]
});
export { router };