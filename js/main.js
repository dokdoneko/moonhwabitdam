  /* [공통] 마우스 휠 이벤트 */
  $('.wrap section').on('wheel', function (e) {
    e.preventDefault();
    let nav;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      nav = $(this).prev();
    } else {
      nav = $(this).next();
    }

    if (nav.length) {
      let moveTop = nav.offset().top;
      // console.log(moveTop);
      $('html,body').stop().animate({
        scrollTop: moveTop,
      }, 1300);
    }
  });

  /* [공통] 브라우저가 리사이즈될 때마다 브라우저 높이값 재저장*/
  let ht =$(window).height()
  $(window).resize(function(){
    let ht =$(this).height()
  });

  /* [공통] 스크롤 이벤트 시작 */
  let sc;
  let sectionI = $('.wrap section').length;
  $(window).scroll(function(){
    sc = $(window).scrollTop()
    for(let i =0; i<sectionI; i++){
      if(sc>=ht*i && sc<ht*(i+1)){
        $('.wrap section').eq(i).addClass('on').siblings().removeClass('on')
        $('.slide_nav_all .slide_nav').eq(i).addClass('on').siblings().removeClass('on')
      }
    }
  })

 /* 페이지 소개 펼쳐지기 */
   function animateOnScroll() {
    $('.go_page img').each(function() {
      var elemTop = $(this).offset().top;
      var elemBottom = elemTop + $(this).height();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      
      if (elemBottom > viewportTop && elemTop < viewportBottom) {
        $(this).css('animation', 'fadeIn 1.7s forwards');
      }
    });

    $('#s4, #s6').each(function() {
      var elemTop = $(this).offset().top;
      var elemBottom = elemTop + $(this).height();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      
      if (elemBottom > viewportTop && elemTop < viewportBottom) {
        $(this).find('.go_right').css('animation', 'goRight 1.3s forwards');
      }
    });

    $('#s5, #s7').each(function() {
      var elemTop = $(this).offset().top;
      var elemBottom = elemTop + $(this).height();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      
      if (elemBottom > viewportTop && elemTop < viewportBottom) {
        $(this).find('.go_left').css('animation', 'goLeft 1.3s forwards');
      }
    });
  }

  $(window).on('scroll', function() {
    animateOnScroll();
  });
