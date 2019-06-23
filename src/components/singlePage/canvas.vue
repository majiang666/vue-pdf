<template>
    <div>
        <canvas v-for="item in numPages" :key="item" :id="'pdf'+item"  />
    </div>
</template>
<script>
import pdfjsLib from 'pdfjs-dist';
export default {
    data(){
        return {
            numPages:0
        }
    },
    props:['src'],
    mounted(){
        let loadingTask = pdfjsLib.getDocument(this.src);
        let _this = this;
        loadingTask.promise.then((pdf) => {
            this.numPages = pdf.numPages;
            for(let i = 1; i <= pdf.numPages; i++){
                pdf.getPage(i).then(function(page) {
                    var scale = 2; //缩放比例
                    var viewport = page.getViewport(scale);
                    var canvas = document.getElementById('pdf'+i);
                    var context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    canvas.style.width = '100%';
                    var renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    };
                    page.render(renderContext);
                });
            }
            _this.$emit('loadingFun',false);
        });
    }
}
</script>

