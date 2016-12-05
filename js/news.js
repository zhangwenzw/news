$(function(){
	var mySwiper = new Swiper('.banner', {
	    pagination: '.swiper-pagination',
	    paginationClickable :true,
	})
	var mySwiper1 = new Swiper('.box', {
	    scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
	})
    var swiper = new Swiper('.classify .swiper-container', {
        slidesPerView: 0,
        spaceBetween: 0,
        freeMode: true
    });
})
