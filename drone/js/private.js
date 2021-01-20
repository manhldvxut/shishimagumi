
var swiper = new Swiper('.gall-slide', {
  // pagination: '.swiper-pagination', 
  slidesPerView: 2,
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  direction: 'horizontal',
  spaceBetween: 25,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev', 
  },
});

// $( ".clc-child" ).click(function() {
//   $(this).next().toggle();
// });

jQuery(function($) {
  var doAnimations = function() {
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.content-desc p');
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    $animatables.each(function(i) {
       var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
            $animatable.addClass('txt-anim');
      }
    }); 
  };
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
}); 


if($(window).innerWidth() > 1023){
    new WOW().init();
}


$("#datepicker").datetimepicker({
  useCurrent: false,
  format: "L",
  showTodayButton: true,
  icons: {
    next: "fa fa-chevron-right",
    previous: "fa fa-chevron-left",
    today: 'todayText',
  } 
});
$("#datepicker-1").datetimepicker({
  useCurrent: false,
  format: "L",
  showTodayButton: true,
  icons: {
    next: "fa fa-chevron-right",
    previous: "fa fa-chevron-left",
    today: 'todayText',
  } 
});
// $("#timepicker").datetimepicker({
//   format: "LT",
//   icons: {
//     up: "fa fa-chevron-up",
//     down: "fa fa-chevron-down"
//   }
// });