
var swiper = new Swiper('.gall-slide', {
  slidesPerView: 2,
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  direction: 'horizontal',
  spaceBetween: 20,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev', 
  },
  breakpoints: {
      1023: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      767: {
        slidesPerView: 1.2,
        spaceBetween: 5
      }
    }
});

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



  /*scroll*/
  $('a[href^="#"]').on('click', function(e){
    e.preventDefault();
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    if(window.innerWidth >= 768){
        var position = target.offset().top - 160;
        $('body,html').animate({scrollTop:position}, speed, 'swing');            
    }else{
        var position = target.offset().top - 170;
        $('body,html').animate({scrollTop:position}, speed, 'swing');  
    }
  })
}); 


if($(window).innerWidth() > 1023){
    new WOW().init();
}
$( document ).ready(function() {
  $('.load-bar').addClass('active');
  setTimeout(function(){
    $('.loading-page, header').addClass('load-active');  
    $('body').addClass('over-hidd');  
  }, 1200);


  // 
  var thisFull = $('.fullResver')
  thisFull.click(function(){
    alert("この時間は空いていません！")
  })

});

$(function() {
  $('#datepicker').datepicker({
    onSelect: function(dateText) {
      $('#datepicker2').datepicker("setDate", $(this).datepicker("getDate"));
    }
  });
  $("#datepicker2").datepicker(); 
});


$('.inin').click(function () {
  var checkboxValues = [];
  $('input[type="checkbox"]:checked').each(function(index, elem) {
    var result=$(elem).val().split('-');
      checkboxValues.push(parseInt(result));
      if ($(this).hasClass('fullResver')){
        alert("この時間は空いていません！")
      }else{
        var tongchon = checkboxValues.length;
        var start = checkboxValues[0];
        var end = checkboxValues[checkboxValues.length - 1] + 1;
        $('#ranger-value').val(start+'時 - '+end+'時')
      }
  });
});

