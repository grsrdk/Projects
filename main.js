$(function () {

   //confirm_form .confirm_form tabs
   $('#menu-tabs li').click(function () {
      var thisClass = this.className.slice(0, 2);
      $('div.t1').hide();
      $('div.t2').hide();
      $('div.t3').hide();
      $('div.' + thisClass).fadeIn(500);
      $('#menu-tabs li').removeClass('active');
      $(this).addClass('active');
      return false;
   });
   $('#menu-tabs li.t1').click();

   //homepage first_view slick-slider
   $('.slickSlider').slick({
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,

      responsive: [
         {
            breakpoint: 1585,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               arrows: false,
               dots: true
            }
            //   },
            //   {
            //     breakpoint: 600,
            //     settings: {
            //       slidesToShow: 1,
            //       slidesToScroll: 1
            //     }
            //   },
            //   {
            //     breakpoint: 480,
            //     settings: {
            //       slidesToShow: 1,
            //       slidesToScroll: 1
            //     }
         }
         //   // You can unslick at a given breakpoint now by adding:
         //   // settings: "unslick"
         //   // instead of a settings object
      ]
   });
});