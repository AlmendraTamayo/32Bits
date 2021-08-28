import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path:"*",
            component: ()=>import("@/views/404")
        },
        {
            path: '/',
            name: 'inicio',
            component: () => import('./views/Inicio')
        },{
            path: '/busquedas',
            name: 'Busquedas',
            component: () => import("@/views/Busquedas")
        },
        {
            path: '/ventas',
            name: 'Ventas',
            component: () => import("@/views/Ventas")
        },
        {
            path: '/total',
            name: 'Total',
            component: () => import("@/views/Total")
        }            
    ]
})