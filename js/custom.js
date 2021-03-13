$(function () {
    $('.ban_slide').slick({
        dots: false,
        nextArrow:'.next',
        prevArrow:'.prev',
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });

      // service slick
      $('.ser_slick').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        slideToScroll: 1,
        verticalSwiping:true,
        vertical:true,
        nextArrow:'.ser_next',
        prevArrow:'.ser_prev',
      });
});