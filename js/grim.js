$(function () {
    /* 마우스 휠 이벤트 */
    $('#grim').on('wheel', function (e) {
        e.preventDefault();
        let nav;
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            nav = $(this).prev();
        } else {
            nav = $(this).next();
        }

        if (nav.length) {
            let moveTop = nav.offset().top;
            $('#grim').stop().animate({
                scrollTop: moveTop - $('#grim').offset().top + $('#grim').scrollTop(),
            }, 500);
        }
    });
    /* 마우스 휠 이벤트 끝 */


    
    /* contents4 족자 탭 슬라이드 다운 */
    $('.book li').click(function() {
        let index = $(this).index();
        console.log('this:',index);

        $(this).addClass('active').siblings().removeClass('active');

        $(this).parent().parent().find('.painting li').eq(index).addClass('active').siblings().removeClass('active');

        $(this).parent().parent().find('.description li').eq(index + 1).addClass('active').siblings().removeClass('active');
    });



    /* contents4슬라이드 옆으로 */
    let slideI = 0;
    let slideTxt;
    let slideLen = $('.contents4>ul.slide>li').length;
    $('.slideNum em').text(slideLen);
    function txtF() {
      if ($(this).hasClass('prev')) {
        if (slideI != 0) {
          slideI--;
        }
      } else {
        if (slideI < slideLen - 1) {
          slideI++;
        }
      }
  
      console.log(slideI);
      $('.contents4>ul.slide>li').removeClass('on').eq(slideI).addClass('on');
      $('.slideNum b').text('0'+(slideI+1));
    }
  
    $('.prev_next >div').click(txtF);


    /* AOS */
    AOS.init();
});