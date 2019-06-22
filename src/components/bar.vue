<template>
    <div class="bar">
        <span @click="prePage">上一页</span>
        <span @click="bigPage">+</span>
        <span>{{ curPage }}/{{ total }}</span>
        <span @click="smallPage">-</span>
        <span @click="nextPage">下一页</span>
    </div>
</template>

<script>
import Bus from './bus';
export default {
    data () {
        return {
            total:0
        }
    },
    props:['curPage','prePage','nextPage','bigPage','smallPage'],
    mounted () {
        Bus.$on("total",val => {
            this.total = val;
        })  
    }
}
</script>

<style>
    .bar{
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        background: #ccc;
        height:50px;
        width: 100%;
        display: flex;
    }
    .bar span{
        flex:1;
        text-align: center;
        line-height: 50px;
    }
</style>

