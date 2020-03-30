<template>
    <div>
        <h2 class="h">这是Accountd的注册子组件 ----------->{{msg}}</h2>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
    /*如果想要设置本组件中的样式，那就必须加上scoped，否则会变成全局样式*/
    div{
        color: orange;
    }
</style>