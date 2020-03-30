<template>
    <div>
        <h3>这是account组件</h3>
        <router-link to="/acc/login">登录</router-link>
        <router-link to="/acc/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style scoped>
/*如果想要设置本组件中的样式，那就必须加上scoped，否则会变成全局样式*/
    div{
        color: #42b983;
    }
</style>