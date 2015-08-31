$(document).foundation();

$(document).ready(function(){
  headerStartup();
  navigationScrolling();
  scrollEffects();
  researchInfo();
  workWheel();
  resizeEvents();
});

headerStartup = function() {
  $('.header').waitForImages(function() {
    setTimeout(function() {
      $('.header').removeClass("uninitialised");
    }, 500);
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

researchInfo = function() {
  // resize to fit the content
  var maxHeight = -1,
      isMobile = Foundation.utils.is_small_only();

  if (isMobile) {
    $(".research-info").height($(".research-info .content.active").height());
  } else {
    $(".research-info .content").each(function() {
      if ($(this).height() > maxHeight)
        maxHeight = $(this).height();
    });
    $(".research-info").height(maxHeight);
  }

  $(".research-topics .topic-meta").on("click", function() {
    var current = $(".research-info .content.active"),
        topic = $(this).data("project-name"),
        isMobile = Foundation.utils.is_small_only();

    if (current.hasClass(topic)) {
      topic = "default";
    }

    current.addClass("blast-off");

    //$(".research-topics .active .show-for-touch").html("(touch to view)");
    $(".research-topics .active").removeClass("active");

    $(".research-topics ."+topic).addClass("active");
    //$(".research-topics .active .show-for-touch").html("(touch to hide)");

    if (isMobile) {
      // As the new content comes in, scroll the viewport up ...
      $("html,body").animate({
        scrollTop: $(".research-info").offset().top
      }, 500);

      // ... and resize the div .research-info
      $(".research-info").animate({
        height: $(".research-info .content."+topic).height()
      }, 500);
    }

    setTimeout(function() {
      current.removeClass("active").removeClass("blast-off");
      $(".research-info .content."+topic).addClass("active");
    }, 300);
  });
}

workWheel = function() {
  // get middle of .work-wrap
  var workMiddle = $(".work-wrap").width() / 2;
  $(".work-wheel").css('left', workMiddle);

  // add .active to the first one
  if ($(".work-wheel .work-item").hasClass("active")) {
    // only need to ensure that the centered element is centered:
    $(".work-wheel").css("left", workMiddle - $(".work-wheel .work-item.active").position().left - $(".work-wheel .work-item.active img").width()/2);
  } else {
    $(".work-wheel .work-item").first().addClass("active");
    $(".work-content-wrap .work-content-item").first().addClass("active").removeClass("to-right").removeClass("to-left");
  }

  // now, whenever an item is clicked, do something:
  $(".work-item img").on("click", function() {
    var $this = $(this),
        $cont = $this.parent(),
        fromLeft = - $cont.position().left,
        newPos = workMiddle + fromLeft - $this.width()/2,
        index = $(".work-wheel .work-item").index($cont),
        oldIndex = $(".work-wheel .work-item").index($(".work-wheel .work-item.active"));

    if (!$cont.hasClass("active")) {
      $(".work-wheel .work-item.active").removeClass("active");
      $(".work-wheel").css('left', newPos);

      if (index > oldIndex) {
        $(".work-content-item:eq("+oldIndex+")").removeClass("active").addClass("to-left");
        // move in new text
      } else {
        $(".work-content-item:eq("+oldIndex+")").removeClass("active").addClass("to-right");
      }

      setTimeout(function() {
        $cont.addClass("active");
        $(".work-content-item:eq("+index+")").addClass("active").removeClass("to-left").removeClass("to-right");
      }, 400);
    }
  });
}

scrollEffects = function() {
  var researchTop = $("#research").offset().top;
  $(window).scroll(function() {
    var winPos = $(window).scrollTop();
    var winHt = $(window).height();

    // Research section - face image jumps up
    if (winPos > (researchTop - (winHt / 2))) {
      $("#research .research-topics .topic").each(function(i){
        setTimeout(function(){
          $("#research .research-topics .topic").eq(i).removeClass("from-below");
        }, 400 * i);
      });
    }
  });
}

resizeEvents = function() {
  $(window).resize(function(){
    researchInfo();
    workWheel();
  });
}
