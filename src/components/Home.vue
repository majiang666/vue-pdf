<template>
  <div class="home">
    <Loading :loading="loading" />
    <Canvas :src="pdfFile" v-on:loadingFun="closeLoading" />
  </div>
</template>

<script>
import pdfFile  from 'file-loader!../assets/1.pdf';
import Canvas from './canvas';
import Loading from './Loading';
export default {
  name: 'home',
  data(){
    return {
      pdfFile,
      loading:true
    }
  },
  methods: {
    closeLoading:function(val){
      this.loading = val;
    }
  },
  components:{
    Canvas,
    Loading
  }
}
</script>

<style scoped>

</style>
