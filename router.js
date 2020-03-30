//在这存放路由模块
import acc from './src/components/account.vue'
import goods from './src/components/goodslist.vue'
import login from './src/components/login.vue'
import register from './src/components/register.vue'
import vuerouter from 'vue-router'

//创建一个路由对象
var router = new vuerouter({
    routes:[
        {
            path:'/acc',
            component:acc,
            children:[
                {path:'login',component:login},
                {path:'register',component:register}
            ]
        },
        {path:'/goods',component:goods},
    ]
})

//暴露路由对象
export default router