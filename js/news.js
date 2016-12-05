function resize(Origin,type){
    var widths=document.documentElement.clientWidth;
    var heights=document.documentElement.clientHeight;
    var type=type||"x";
    if(type=="x"){
       var scale=widths/Origin*100;
    }else if(type=="y"){
        var scale=heights/Origin*100;
    }
    document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
}
   resize(750,"y");
   $(function(){
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable :true,
    })
})
   
$(function(){
        var width = $(".classify").width();
        $(".classify").mousedown(function(e){
            e.preventDefault();
        })
        $(".classify").mousemove(function(e){
            e.preventDefault();
        });
        var marginL;
        touch.on("body","dragstart",".classify-con",function(e){
            $(".classify-con").css({
                transition:"none"
            });
            marginL = parseInt($(".classify-con").css("marginLeft"))?parseInt($(".classify-con").css("marginLeft")):0;
        });
         touch.on("body","drag",".classify-con",function(e){
            $(".classify-con").css({
                marginLeft:e.x+marginL
            })
        });
})