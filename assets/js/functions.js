$(document).foundation();

$(document).ready(function(){
  headerFill();

  navigationScrolling();

  yearsSince();

  scrollEffects();

  researchInfo();

  resizeEvents();
});

headerFill = function() {
  $("#headerTitleFill").textfill({
    maxFontPixels: 100
  });
}


navigationScrolling = function() {
  $("#site-navigation li a").on("click", function(e) {
    e.preventDefault();
    var to = $(this).data("section");

    $("html,body").animate({
      scrollTop: $("#"+to).offset().top
    }, 500);
    return false;
  });
}

yearsSince = function() {
  var year = (new Date).getFullYear();
  var since = year - 2010;
  $(".yearsSinceStarting").html(since);
}

researchInfo = function() {
  // resize to fit the content
  var maxHeight = -1;
  $(".research-info .content").each(function() {
    if ($(this).height() > maxHeight)
      maxHeight = $(this).height();
  });
  $(".research-info").height(maxHeight);

  $(".research-topics .topic-meta").on("click", function() {
    var current = $(".research-info .content.active");
    var topic = $(this).data("project-name");

    if (current.hasClass(topic)) {
      topic = "default";
    }

    current.addClass("blast-off");

    $(".research-topics .active .show-for-touch").html("(touch to view)");
    $(".research-topics .active").removeClass("active");

    $(".research-topics ."+topic).addClass("active");
    $(".research-topics .active .show-for-touch").html("(touch to hide)");
    $(".research-topics .active").trigger('touchend');

    setTimeout(function() {
      current.removeClass("active").removeClass("blast-off");
      $(".research-info .content."+topic).addClass("active");
    }, 300);
  });
}

scrollEffects = function() {
  var aboutTop = $("#about .face-image").offset().top;
  $(window).scroll(function() {
    var winPos = $(window).scrollTop();
    var winHt = $(window).height();

    // About section - face image jumps up
    if (winPos > (aboutTop - (winHt))) {
      $("#about .face-image").removeClass("from-below");
    }
  });
}

resizeEvents = function() {
  $(window).resize(function(){
    headerFill();
  });
}
