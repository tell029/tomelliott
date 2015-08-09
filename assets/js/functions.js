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

  // Clicking the arrows:
  var switchArrows = function() {
    if ($("#about .next-arrow").hasClass("hidden")) {
      $("#about .next-arrow").removeClass("hidden");
      $("#about .prev-arrow").addClass("hidden");
      $("#about").removeClass("secondary");
    } else {
      $("#about .next-arrow").addClass("hidden");
      $("#about .prev-arrow").removeClass("hidden");
      $("#about").addClass("secondary");
    };
  };

  $("#about .next-arrow").click(function() { switchArrows(); });
  $("#about .prev-arrow").click(function() { switchArrows(); });
  $("#about .read-more").click(function() {switchArrows(); });
});
