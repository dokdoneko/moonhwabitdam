$(function(){
  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });

   // 스크롤 이벤트 리스너 등록
   const sections = $(".subheading");
   const windowHeight = $(window).height();
 
   $(window).on("scroll resize", function() {
    const scrollTop = $(this).scrollTop();
    const windowCenter = scrollTop + windowHeight / 2;

    sections.each(function() {
      const section = $(this);
      const sectionTop = section.offset().top;
      const sectionHeight = section.outerHeight();
      const sectionCenter = sectionTop + sectionHeight / 2;
      const sectionBottom = sectionTop + sectionHeight;

      // Calculate the visible range for each section
      const visibleTop = scrollTop;
      const visibleBottom = scrollTop + windowHeight;

      // Check if the section is within the visible range
      const isSectionVisible = sectionBottom > visibleTop && sectionTop < visibleBottom;

      if (isSectionVisible) {
        section.addClass("on");
      } else {
        section.removeClass("on");
      }
    });
  });

  AOS.init();

  /* video modal */
  $(document).ready(function(){
    /* video modal */
    $('.item-desc').on('click', function(){
      var videoSrc = $(this).data('video-src');
      $('.vid_modal iframe').attr('src', videoSrc);
      $('.vid_modal').fadeIn();
    });
  
    $('.vid_modal i').click(function(){    
      $('.vid_modal').fadeOut(function() {
        $('.vid_modal iframe').attr('src', '');
      });
    });
  });

});/* ready */
