<template>
    <div class="loading"></div>
</template>

<script>
    export default {
        name:'LoadungComponent'
    }
</script>

<style lang="less" scoped>
    .loading{
        width: 50px;
        height: 50px;
        border: 3px solid @light-yellow;
        border-top-color: @yellow;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: auto;
    }

    @keyframes spin{
        to{
            transform: rotate(360deg);
        }
    }
</style>