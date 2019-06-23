<template>
    <div>
        <!-- {{scale.toFixed(1)}} -->
        <canvas id="pdf"  />
    </div>
</template>
<script>
import pdfjsLib from 'pdfjs-dist';
import Bus from '../bus';
export default {
    data(){
        return {
            numPages:0,
            pg:this.curPage,
            sc:this.scale
        }
    },
    props:['src','curPage','scale'],
    mounted(){
        this.init(this.curPage,this.scale.toFixed(1));
    },
    watch:{
        curPage(pg){
            this.pg = pg;
            this.init(pg,this.sc);
        },
        scale(sc){
            this.sc = sc;
            this.init(this.pg,sc);
        }
    },
    methods: {
        init(pg,sc){
            let loadingTask = pdfjsLib.getDocument(this.src);
            let _this = this;
            loadingTask.promise.then((pdf) => {
                    Bus.$emit("total",pdf.numPages);
                    this.$emit("totals",pdf.numPages);
                    pdf.getPage(pg).then(function(page) {
                    let scale = Number(sc).toFixed(1); 
                    let viewport = page.getViewport(scale);
                    let canvas = document.getElementById('pdf');
                    let context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    let renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    };
                    page.render(renderContext);
                    });
                _this.$emit('loadingFun',false);
            });
        }
    }
}
</script>
<style>
    #pdf{
        position: absolute;
        top:0;
        left:0;
        width:100%;
    }
</style>

