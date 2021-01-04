/* スクロール */
$(function(){
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        if(window.innerWidth >= 901){
            var position = target.offset().top + 80;
            $('body,html').animate({scrollTop:position}, speed, 'swing');            
        }else{
            var position = target.offset().top - 70;
            $('body,html').animate({scrollTop:position}, speed, 'swing');  
        }
    })
});

$(document).ready(function(){

	setTimeout(function(){ 
    $(".slogan").addClass("is-shown"); 
  },1000)
    

  setTimeout(function(){ 
    $(".js-inkan").addClass("is-shown"); 
  },1900)
});


/*scroll add class*/

 $(window).scroll(function() {
// Scroll slide up out
  $('.js-scroll-item').each(function() {
    let elemPos = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

    if ($(window).innerWidth() >= 769) {
      if (scroll > elemPos - windowHeight + 100) {
        $(this).addClass('is-shown');
      } // PC
    }else{
      if (scroll > elemPos - windowHeight + 10) {
        $(this).addClass('is-shown');
      } // Sp
    }

  });
});

$(document).ready(function() {
	$('.logo__fishing, .logo__zkai ').ripples({
		resolution: 256,
		perturbance: 0.04
	});
});