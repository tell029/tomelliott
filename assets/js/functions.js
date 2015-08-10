$(document).ready(function() {
  // The mobile navigation toggle button
  $(".mobile-nav-toggle").click(function() {
    $(".mobile-nav-toggle").toggleClass("is-open");
    $(".mobile-nav").toggleClass("is-open");
  });

  // The title in the side/top-bar
  var titleTop = $("#mainTitle").offset().top;
  var titleHeight = $("#mainTitle").height();
  $(window).scroll(function() {
    if ( $(window).scrollTop() > titleTop + 0.8*titleHeight) {
      $("#headerTitle").addClass("show");
    } else {
      $("#headerTitle").removeClass("show");
    }
  });

  // // Clicking the arrows:
  // var windowResizeAbout = function() {
  //   var aboutSecondaryBottom = $("#about .secondary").offset().top + $("#about .secondary").height();
  //   var aboutSectionHeight = $("#about").height();
  //
  //   if (aboutSecondaryBottom >= aboutSectionHeight-20) {
  //     $("#about .fill-space").addClass("small-window");
  //   } else {
  //     $("#about .fill-space").removeClass("small-window");
  //   }
  // };
  // $(window).load(function() { windowResizeAbout(); });
  // $(window).resize(function() {
  //   windowResizeAbout();
  // });

  var switchArrows = function() {
    if ($("#about .next-arrow").hasClass("hidden")) {
      // hiding the 'extra' text
      $("#about .next-arrow").removeClass("hidden").addClass("visible");
      $("#about .prev-arrow").addClass("hidden").removeClass("visible");
      $("#about").removeClass("secondary");
    } else {
      // showing the 'extra' text
      $("#about .next-arrow").addClass("hidden").removeClass("visible");
      $("#about .prev-arrow").removeClass("hidden").addClass("visible");
      $("#about").addClass("secondary");

      // scroll window UP if needed:
      var extraTop = $("#close-about-secondary").offset().top;
      if ($(window).scrollTop() - extraTop >= 0) {
        $("html, body").delay(200).animate({scrollTop: extraTop}, '300');
      };
    };
  };

  $("#about .next-arrow").click(function() {
    if ($(this).hasClass("visible")) { switchArrows(); };
  });
  $("#about .prev-arrow").click(function() {
    if ($(this).hasClass("visible")) { switchArrows(); };
  });
  $("#about .read-more").click(function() {switchArrows(); });
  $("#close-about-secondary").click(function() {switchArrows(); });
});
