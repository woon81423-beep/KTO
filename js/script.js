$(function () {
  // 배경 슬라이드
  let visual = 0;
  let visualTotal = $(".visual_slide").length;

  setInterval(function () {
    $(".visual_slide").css({ zIndex: -3 });
    $(".visual_slide").eq(visual).css({ zIndex: -2 });

    if (visual == visualTotal - 1) {
      visual = 0;
    } else {
      visual = visual + 1;
    }

    $(".visual_slide").eq(visual).css({ zIndex: -1 }).hide().fadeIn(2800);
  }, 6000);

  // 관광정보
  let tab = 2;
  let tabStop;

  function tabChange() {
    $(".quick_btn").removeClass("on").eq(tab).addClass("on");
    $(".quick_con").removeClass("on").eq(tab).addClass("on");
    $(".btn_top").removeClass("on").eq(tab).addClass("on");
  }

  function tabStart() {
    clearInterval(tabStop);
    tabStop = setInterval(function () {
      if (tab == 2) {
        tab = 0;
      } else {
        tab = tab + 1;
      }
      tabChange();
    }, 4500);
     //라인
  $(".line").css({ width: "0%" });
  $(".line").stop().animate({ width: "100%" });
  }

  $(".quick_btn").on("click", function () {
    tab = $(this).index();
    tabChange();
  });

  $(".quick").on("mouseenter focusin", function () {
    clearInterval(tabStop);
  });
  $(".quick").on("mouseleave focusout", function () {
    if ($(".quick").find(":focus").length == 0) {
      tabStart();
    }
  });
  tabChange();
  tabStart();
 
  // 스크롤화면
  function scrollEffect() {
    let sc = $(window).scrollTop();

    if (sc >= $("#con1").offset().top - 200) {
      $(".con1_title, .news_list").addClass("on");
    }
    if (sc >= $("#con2").offset().top - 200) {
      $(".con2_title, .card_list").addClass("on");
    }
    if (sc >= $("#con3").offset().top - 100) {
      $(".con3_title, .con3_right").addClass("on");
    }
  }
  $(window).on("scroll", scrollEffect);
  scrollEffect();

  //알림마당 배너
  let banner = 0;
  let bannerTotal = $(".banner_slide").length;

  setInterval(function () {
    if (banner == bannerTotal - 1) {
      banner = 0;
    } else {
      banner = banner + 1;
    }
    $(".banner_slide").removeClass("on").eq(banner).addClass("on");
  }, 4000);
});
