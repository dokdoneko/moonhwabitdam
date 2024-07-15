$(function () {
  /* [공통] 마우스 휠 이벤트 */
  $('.wrap section, .wrap footer').on('wheel', function (e) {
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
      }, 1300, 'easeOutBack');
    }
  });

  /* [공통] 브라우저가 리사이즈될 때마다 브라우저 높이값 재저장*/
  let ht = $(window).height()
  $(window).resize(function () {
    let ht = $(this).height()
  });

  /* bg_moving 주기 */
  $('section').on('mousemove', function (e) {
    let posX = e.pageX;
    let posY = e.pageY;
    /* console.log(posX + '/' + posY); */

    $('.sura_1').css({
      left: 0 + (posX / 20),
      top: 0 + (posY / 20),
    });
    $('.sura_2').css({
      right: 0 + (posX / 80),
      bottom: 0 + (posY / 20),
    });
    $('.new_1').css({
      left: 0 + (posX / 80),
      top: 0 + (posY / 20),
    });
    $('.new_2').css({
      right: 0 + (posX / 90),
      bottom: 0 + (posY / 30),
    });
    $('.chu_1').css({
      left: 0 + (posX / 50),
      top: 0 + (posY / 20),
    });
    $('.chu_2').css({
      right: 0 + (posX / 90),
      bottom: 0 + (posY / 30),
    });
    $('.chu_3').css({
      right: 400 + (posX / 10),
      bottom: 0 + (posY / 30),
    });
    $('.medi_1').css({
      left: 0 + (posX / 80),
      top: 0 + (posY / 90),
    });
    $('.medi_2').css({
      right: 0 + (posX / 80),
      bottom: 0 + (posY / 100),
    });
  });

  /* 카드 on 주기 */
  $('section .inner .card_all ul.card li').mouseenter(function () {
    $(this).addClass('on').siblings().removeClass('on');
  });

  /* [공통] 스크롤 이벤트 시작 */
  let sc;
  let sectionI = $('.wrap section').length;
  $(window).scroll(function () {
    sc = $(window).scrollTop()
    for (let i = 0; i < sectionI; i++) {
      if (sc >= ht * i && sc < ht * (i + 1)) {
        $('.wrap section').eq(i).addClass('on').siblings().removeClass('on')
        $('.slide_nav_all .slide_nav').eq(i).addClass('on').siblings().removeClass('on')
      }
    };
  });

  /* font moving */
  AOS.init();


  /* slide */
  let swiper = new Swiper("#sura .card_all", {
    slidesPerView: 4,
    spaceBetween: 16,
    freeMode: true,
    loop: true,
    pagination: {
      el: "#sura .swiper-pagination",
      clickable: true,
    },
  });
  let swiper2 = new Swiper("#new .card_all", {
    slidesPerView: 4,
    spaceBetween: 16,
    freeMode: true,
    loop: true,
    pagination: {
      el: "#new .swiper-pagination",
      clickable: true,
    },
  });
  let swiper3 = new Swiper("#chu .card_all", {
    slidesPerView: 4,
    spaceBetween: 16,
    freeMode: true,
    loop: true,
    pagination: {
      el: "#chu .swiper-pagination",
      clickable: true,
    },
  });
  let swiper4 = new Swiper("#medi .card_all", {
    slidesPerView: 4,
    spaceBetween: 16,
    freeMode: true,
    loop: true,
    pagination: {
      el: "#medi .swiper-pagination",
      clickable: true,
    },
  });
})