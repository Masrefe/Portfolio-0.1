$(document).ready(function () {

  // Preloader
    $(window).on("load", (function() {
        $("#loading").delay(1000).fadeOut(500);
            $("#loading-center").on("click", (function() {
            $("#loading").fadeOut(500);
        }))
    }))
// magnific popep for portfolio 
  $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
// wow js active
     var wow = new WOW({
         mobile: false
         });
     wow.init();  
//one page nav for smoth scroll
   $('.main-menu, .scroll-icon').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing'
    });

$('.slimmenu').slimmenu(
{
    resizeWidth: '991',
    collapserTitle: 'Main Menu',
    animSpeed:'medium',
    indentChildren: true,
    childrenIndenter: '&raquo;'
});

 // back to top with nice smoth scroll 
  if ($('#back-to-top').length) {
    var scrollTrigger = window.innerHeight, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('show');
      } else {
        $('#back-to-top').removeClass('show');
      }
    };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }

// Show more item on icotope
   $('.scroll-icon').on('click', function(){
    $('.more-item').addClass('show-more'), 5000;
   });


});

$(document).ready(function(){

// header fixed
   var navOffset= $("nav").offset().top;
  
  $("nav").wrap('<div class="nav-placeholder"></div>');
  $(".nav-placeholder").height($("nav").outerHeight());

    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop();

      if (scrollPos >= navOffset) {
        $("nav").addClass("fixed");
      }else{
        $("nav").removeClass("fixed");
      }
    });
})