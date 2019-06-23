<template>
    <div class="bar">
        <span @click="prePage"><img src="../../assets/pre.svg" /></span>
        <span @click="bigPage"><img src="../../assets/fd.svg" /></span>
        <span>{{ curPage }}/{{ total }}</span>
        <span @click="smallPage"><img src="../../assets/sx.svg" /></span>
        <span @click="nextPage"><img src="../../assets/next.svg" /></span>
    </div>
</template>

<script>
import Bus from '../bus';
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
        bottom:10px;
        left:0;
        right:0;
        height:50px;
        width: 100%;
        display: flex;
    }
    .bar span{
        flex:1;
        text-align: center;
        line-height: 50px;
    }
    .bar span img{
        width:28px;
        margin-top:11px;
    }
</style>

