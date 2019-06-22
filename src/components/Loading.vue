<template>
    <div class="loading" v-if="loading">
        <div class="loading-mean">
            <img src="../assets/loading.svg" alt="">
            <p>loading...</p>
        </div>
    </div>
</template>

<script>
export default {
    props:['loading']
}
</script>

<style>
    .loading{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        width:100%;
        height:100%;
        background:rgba(0, 0, 0, 0);
    }
    .loading .loading-mean{
        width:50px;
        height:50px;
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .loading .loading-mean img{
        width:50px;
        height:50px;
    }
    .loading .loading-mean p{
        font-size:13px;
        color:#666;
    }
</style>

