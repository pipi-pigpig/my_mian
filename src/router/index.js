import { createRouter,createWebHistory } from "vue-router";
import mainMode from "@/components/main/mainMode.vue";
import healthPage from "@/components/healthPage.vue";
import onlineAsk from "@/components/main/function/onlineAsk/onlineAsk.vue";
import personPage from "@/components/personPage.vue";
import healthOxygen from "@/components/health/healthOxygen.vue";
import healthWeight from "@/components/health/healthWeight.vue";
import PerfusionIndex from "@/components/health/perfusionIndex.vue";
import HeartHealth from "@/components/health/heartHealth.vue";
const routes = [
    {       
        path: '/mainMode',
        component: mainMode,
    },

    {
        path: '/healthPage',
        component: healthPage,
        children:[
            {
                path: '',
                component: healthOxygen,
            
            },
            {
                path: 'weight',
                component: healthWeight,
            },
            {
                path:'perfusionIndex',
                component:PerfusionIndex
            },
            {
                path:'heartHealth',
                component:HeartHealth
            }
        ]
    },
    {
        path: '/onlineAsk',
        component: onlineAsk,
    },
    {
        path: '/personPage',
        component: personPage,
    }
    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router