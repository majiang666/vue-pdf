<template>
  <div class="page">
    <Loading :loading="loading" />
    <Canvas 
    :src="pdfFile" 
    @loadingFun="closeLoading" 
    :curPage="curPage"
    @totals="totalsFun"
    :scale="scale"
    />
    <Bar 
    :curPage="curPage" 
    :prePage="prePage"
    :nextPage="nextPage"
    :bigPage="bigPage"
    :smallPage="smallPage"
    />
  </div>
</template>

<script>
import Canvas from './canvasPage';
import pdfFile  from 'file-loader!../../assets/1.pdf';
import Loading from '../Loading';
import Bar from './bar';
export default {
  name: 'page',
  data(){
    return {
      pdfFile,
      loading:true,
      curPage:1,
      totals:0,
      scale:2
    }
  },
  methods: {
    closeLoading:function(val){
      this.loading = val;
    },
    totalsFun:function(val){
      this.totals = val;
    },
    prePage:function(){
        if((this.curPage - 1) < 1){
          alert("往前没有了！");
          return;
        }
        this.curPage = this.curPage - 1;
    },
    nextPage:function(){
        if(this.curPage >= this.totals){
          alert("往后没有了！");
          return;
        }
        this.curPage = this.curPage + 1;
    },
    bigPage:function(){
        this.scale = this.scale += 0.1;
    },
    smallPage:function(){
        if(this.scale <= 0.1){
          alert("不能再小了！");
          return;
        }
        this.scale = this.scale -= 0.1;
    }
  },
  components: {
    Canvas,
    Loading,
    Bar
  }
}
</script>

<style scoped>

</style>
