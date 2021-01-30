$(function() {
  // wow
  if($(window).innerWidth() > 1023){
    new WOW().init();
  }
  //first load
  loadFirst();
  //slider
  slider();
  //animate
  animate();
  //scroll
  scroll();
  // popup
  PopUp()
  // calendar
  calendar();
  //push time
  pushTimeCheck();
  //send
  plus();
  //slect
  selectPrice()


  $('#back_to_top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
  });

})
$(window).scroll(function () { // scroll page
    if ($(this).scrollTop() > 1000) {
        $('#back_to_top').fadeIn();
    } else {
        $('#back_to_top').fadeOut();
    }

});

function slider(){
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
}

function animate(){
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
}

function scroll(){
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
}

function loadFirst(){
  $('.load-bar').addClass('active');
  setTimeout(function(){
    $('.loading-page, header').addClass('load-active');  
    $('body').addClass('over-hidd');  
  }, 1200);
}


$( document ).ready(function() {
  // check time
  var thisFull = $('.fullResver')
  thisFull.click(function(){
    alert("この時間は空いていません！")
  })


 var count = 0;
  $('.multi-field-wrapper').each(function() {
    var $wrapper = $('.multi-fields', this);
    $(".add-field", $(this)).click(function(e) {
      count += 1;
        $('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper).addClass('update-date');
        $('.multi-field:last-child .hasDatepicker').val("");
        $('.multi-field:last-child .hasDatepicker').data('datein');$('.multi-field:last-child .hasDatepicker').data('datein',count);
        $('.multi-field:last-child #ranger-value').val("");
        $('.multi-field:last-child #ranger-value').attr('data-valuein',count);
        $('.multi-field:last-child #ranger-value').addClass("chenvalue"+count);
        $('.multi-field:last-child #ranger-value').removeClass("chenvalue0");
        $('.update-date label b').html(' 追加日付')

        $('.multi-field').each(function(){
          console.log('multi-field')
          if($(this).find('.inp_date')){
            console.log('find calendar')
            $(this).on().click(function(){
               console.log('c')
            })
          }
        })
    });

    //when remove
    $('.multi-field .remove-field', $wrapper).click(function() {
        if ($('.multi-field', $wrapper).length > 1)
            $(this).parent('.multi-field').remove();
    });
  });


}); 

function plus(){
 /* var count = 0;
  $('.multi-field-wrapper').each(function() {
    var $wrapper = $('.multi-fields', this);
    $(".add-field", $(this)).click(function(e) {
      count += 1;
        $('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper).addClass('update-date');
        $('.multi-field:last-child .hasDatepicker').val("");
        $('.multi-field:last-child .hasDatepicker').data('datein');$('.multi-field:last-child .hasDatepicker').data('datein',count);
        $('.multi-field:last-child #ranger-value').val("");
        $('.multi-field:last-child #ranger-value').attr('data-valuein',count);
        $('.multi-field:last-child #ranger-value').addClass("chenvalue"+count);
        $('.multi-field:last-child #ranger-value').removeClass("chenvalue0");
        $('.update-date label b').html(' 追加日付')
    });

    //when remove
    $('.multi-field .remove-field', $wrapper).click(function() {
        if ($('.multi-field', $wrapper).length > 1)
            $(this).parent('.multi-field').remove();
    });
  });*/

}

function calendar(){
  $('#datepicker').datepicker({
    onSelect: function(dateText) {
      $('#datepicker2').datepicker("setDate", $(this).datepicker("getDate"));
      console.log(dateText); // query vào DB để lấy nhưng khung giờ đã được đặt để addClass fullResver

    },
    maxDate: "1m",
    minDate: "0",
  });
  $("#datepicker2").datepicker(); 
}

function PopUp(){
  $('.inp_date').click(function () {
  var pos = $(this).parent('li').next().find("#ranger-value").data('valuein');
 /* console.log(pos)*/
  $('#valuerange').val(pos);
  });
}
function pushTimeCheck(){
  $('.inin').click(function () {
  // alert()
  var number = $('#valuerange').val();

  var checkboxValues = [];
  var tongchon;
  $('input[type="checkbox"]:checked').each(function(index, elem) {
    var result=$(elem).val().split('-');
      checkboxValues.push(parseInt(result));
      if ($(this).hasClass('fullResver')){
        alert("この時間は空いていません！")
      }else{
        tongchon = checkboxValues.length;
        var start = checkboxValues[0];
        var end = checkboxValues[checkboxValues.length - 1] + 1;
        $('.chenvalue'+number).val(start+'時 - '+end+'時');
      }
    });
    /*if(tongchon === undefined){
      alert('時間選択してください。')
    }*/
  });
}

function selectPrice(){
  var lookup = {
     'price-1': ['15000円+税込'],
     'price-2': ['16000円+税込'],
     'price-3': ['17000円+税込'],
     'price-4': ['18000円+税込'],
  };
  $('#options-price').on('change', function() {
  var selectValue = $(this).val();
  $('#choices-price').empty();
   for (i = 0; i < lookup[selectValue].length; i++) {
      $('#choices-price').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
   }
  });
}

