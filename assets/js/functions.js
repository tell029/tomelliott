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
});
