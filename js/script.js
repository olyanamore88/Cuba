$(function(){

$('.photo__slider').slick({
   prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
   nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',  
   dots: false,
   responsive: [
      {
         breakpoint: 715,
         settings: {
           arrows:false,
           infinite: true,
           autoplay: true,
           dots: true
         }
      }
   ]
});

$('.menu__btn').click(function (event) {
   $('.menu__btn,.menu__list').toggleClass('active');
   $('body').toggleClass('lock');
});

});