//import Vue from './node_modules/vue/dist/vue.js'
import Vue from 'vue'
import t,{pic,school} from './src/test'
import app from './src/components/app_test.vue'
import vuerouter from 'vue-router'

//导入自定义路由模块
import router from './router.js'
// var login = {
//     template:'<h3>这是登录组件</h3>'
// }

//导入login.vue文件
//import login from './src/login.vue'
console.log(t)
console.log(pic)
console.log(school)

Vue.use(vuerouter)


var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    /*components:{
         login
    },

   render:function (cre) {
       return cre(login)
   },
   render: c => c(login)*/
    render: c => c(app),
    router
});




