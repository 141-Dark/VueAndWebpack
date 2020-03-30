<template>
<!--    这里面写html代码-->
    <div>
        <h2 class="h">这是Accountd的登录子组件 ----------->{{msg}}</h2>
    </div>
</template>

<script>
//组件中写逻辑代码,export default向外暴露成员,可以使用任意的变量来接受，而且只可以向外暴露一次,但是可以用export暴露多次
    export default {
        data(){
            //相当于私有组件，所以data必须是一个function
            return{
                msg:'456'
            }
        },
        methods:{
            show(){
                console.log("调用了show方法")
            }
        }
    }
</script>

<style>
/*这里写样式*/
    .h{
        font-style: italic;
    }
</style>