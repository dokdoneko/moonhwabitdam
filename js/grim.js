$(function () {

  let ht = $(window).height();
  /* [공통] 마우스 휠 이벤트 */
  $('.wrap>section').on('wheel', function (e) {
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
      }, 500);
    }
  });
  /* contents4 족자 탭 슬라이드 다운 */
  $('.book li').click(function () {
    let index = $(this).index();
    console.log('this:', index);

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
    $('.slideNum b').text('0' + (slideI + 1));
  }

  $('.prev_next >div').click(txtF);


  /* AOS */
  AOS.init();
});

/* 푸터쪽 글자 */
document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('animated-text');
  let originalText = textElement.innerHTML.trim(); // 텍스트 내용을 가져옴
  textElement.innerHTML = ''; // 기존 내용을 지움

  let index = 0;
  let result = '';

  function animateText() {
    // 텍스트를 초기화하고 애니메이션 효과를 적용
    for (let i = 0; i < originalText.length; i++) {
      if (originalText[i] === '<' && originalText.slice(i, i + 4) === '<br>') {
        result += '<br>';
        i += 3; // <br> 태그를 건너뜀
      } else if (originalText[i] === '&' && originalText.slice(i, i + 6) === '&nbsp;') {
        result += '&nbsp;'; // &nbsp; 문자열을 그대로 추가
        i += 5; // &nbsp; 문자열의 길이만큼 건너뜀
      } else {
        result += `<span style="animation-delay: ${index * 0.1}s;">${originalText[i]}</span>`;
        index++;
      }
    }

    textElement.innerHTML = result;
    result = ''; // 결과 초기화
    index = 0; // 인덱스 초기화
  }

  animateText(); // 페이지 로드 후 처음 한 번 실행

  // 8초마다 animateText 함수를 호출하여 애니메이션 반복
  setInterval(function () {
    textElement.innerHTML = ''; // 애니메이션 초기화
    animateText(); // 다시 애니메이션 실행
  }, 8000); // 5초 (5000밀리초)마다 실행
});


/*  */

