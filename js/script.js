$(function () {
  /*  메인 배경 페이드 */
  let i = 0;
  let total = $(".visual-slide").length;
  let visualStop;
  let visualPlay = true;

  function visualNext() {
    $(".visual-slide").css({ zIndex: -3 });
    $(".visual-slide").eq(i).css({ zIndex: -2 });
    if (i == total - 1) {
      i = 0;
    } else {
      i = i + 1;
    }
    $(".visual-slide").eq(i).css({ zIndex: -1 }).hide().fadeIn(2800);
  }
  function visualStart() {
    clearInterval(visualStop); //
    visualStop = setInterval(visualNext, 6000);
  }
  visualStart();

  $("#visualPlay").on("click", function () {
    if (visualPlay == true) {
      clearInterval(visualStop);
      visualPlay = false;
      $(this).attr("aria-label");
    } else {
      visualStart();
      visualPlay = true;
      $(this).attr("aria-label");
    }
  });
  //알림마당
  $(window).on("scroll", function () {
    let sc = $(window).scrollTop();
    // console.log(sc)
    let pg01 = $("#news").offset().top;
    if (sc >= pg01 - 200) {
      $(".news-heading").addClass("on");
      $(".news-main-grid").addClass("on");
    }
    let pg02 = $("#business").offset().top;
    if (sc >= pg02 - 200) {
      $(".business-heading").addClass("on");
      $(".business-cards").addClass("on");
    }
    let pg03 = $("#participation").offset().top;
    if (sc >= pg03 - 100) {
      $(".participation-section").addClass("on");
    }
  });

  /* */
  let tab = 0;
  let tabStop;
  function tabShow() {
    $(".quick-tab").removeClass("is-active").attr("aria-selected", "false");
    $(".quick-tab").eq(tab).addClass("is-active").attr("aria-selected", "true");
    $(".quick-panel").hide().attr("hidden", "hidden");
    $(".quick-panel").eq(tab).removeAttr("hidden").css({ display: "grid" });
  }
  function tabStart() {
    clearInterval(tabStop);
    tabStop = setInterval(function () {
      if (tab == 2) {
        tab = 0;
      } else {
        tab = tab + 1;
      }
      tabShow();
    }, 4500);
  }
  $(".quick-tab").on("click", function () {
    tab = $(this).index();
    tabShow();
  });
  //
  $(".quick-navigation").on("mouseenter focusin", function () {
    clearInterval(tabStop);
  });
  $(".quick-navigation").on("mouseleave", function () {
    if ($(".quick-navigation").find(":focus").length == 0) {
      tabStart();
    }
  });
  $(".quick-navigation").on("focusout", function () {
    tabStart();
  });
  tabShow();
  tabStart();

  /* 3. 알림마당 */
  let banner = 0;
  let bannerTotal = $(".banner-slide").length;
  let bannerStop;
  let bannerPlay = true;
  function bannerShow() {
    $(".banner-slide").removeClass("is-current").attr("aria-hidden", "true");
    $(".banner-slide")
      .eq(banner)
      .addClass("is-current")
      .attr("aria-hidden", "false");
    $("#bannerNow").text("0" + (banner + 1));
  }
  function bannerNext() {
    if (banner == bannerTotal - 1) {
      banner = 0;
    } else {
      banner = banner + 1;
    }
    bannerShow();
  }
  function bannerStart() {
    clearInterval(bannerStop);
    if (bannerPlay == true) {
      bannerStop = setInterval(bannerNext, 4000);
    }
  }
  $(".banner-next").on("click", function () {
    bannerNext();
    bannerStart();
  });
  $(".banner-prev").on("click", function () {
    if (banner == 0) {
      banner = bannerTotal - 1;
    } else {
      banner = banner - 1;
    }
    bannerShow();
    bannerStart();
  });
  $("#bannerPlay").on("click", function () {
    if (bannerPlay == true) {
      bannerPlay = false;
      $(this).text("▶").attr("aria-label", "배너 재생");
    } else {
      bannerPlay = true;
      $(this).text("Ⅱ").attr("aria-label", "배너 일시정지");
    }
    bannerStart();
  });
  bannerShow();
  bannerStart();
});
