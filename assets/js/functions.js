$(document).foundation();

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-69555072-1', 'auto');
ga('send', 'pageview');

$(document).ready(function(){
  headerStartup();
  navigationScrolling();
  scrollEffects();
  researchInfoSetup();
  researchInfo();
  workWheel();
  resizeEvents();
});

headerStartup = function() {
  $(document).waitForImages(function() {
    setTimeout(function() {
      $('.header').removeClass("uninitialised");
    });
    setTimeout(function() {
      $('#about').removeClass("uninitialised");
    }, 500);
    setTimeout(function() {
      $('#research').removeClass("uninitialised");
    }, 1000);
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

researchInfoSetup = function() {
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
}

researchInfo = function() {
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

workWheelSetup = function() {
  var maxHeight = -1,
      isMobile = Foundation.utils.is_small_only();

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

  if (isMobile) {
    $(".work-content-wrap").height($(".work-content-wrap .work-content-item.active .work-description").height() + $(".work-content-wrap .work-content-item.active .work-details").height());
  } else {
    $(".work-content-wrap .work-content-item .work-description").each(function() {
      if ($(this).height() > maxHeight)
        maxHeight = $(this).height();
    });
    $(".work-content-wrap").height(maxHeight);
  }
}

workWheel = function() {
  // now, whenever an item is clicked, do something:
  $(".work-item img").on("click", function() {
    var $this = $(this),
        $cont = $this.parent(),
        workMiddle = $(".work-wrap").width() / 2,
        fromLeft = - $cont.position().left,
        newPos = workMiddle + fromLeft - $this.width()/2,
        index = $(".work-wheel .work-item").index($cont),
        oldIndex = $(".work-wheel .work-item").index($(".work-wheel .work-item.active")),
        isMobile = Foundation.utils.is_small_only();

    if (!$cont.hasClass("active")) {
      $(".work-wheel .work-item.active").removeClass("active");
      $(".work-wheel").css('left', newPos);

      if (index > oldIndex) {
        $(".work-content-item:eq("+oldIndex+")").removeClass("active").addClass("to-left");
        // move in new text
      } else {
        $(".work-content-item:eq("+oldIndex+")").removeClass("active").addClass("to-right");
      }

      if (isMobile) {
        //  resize the div
        $(".work-content-wrap").animate({
          height: $(".work-content-wrap .work-content-item:eq("+index+") .work-description").height() + $(".work-content-wrap .work-content-item:eq("+index+") .work-details").height()
        }, 500);
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
  var projectsTop = $("#projects").offset().top;

  $(window).scroll(function() {
    var winPos = $(window).scrollTop();
    var winHt = $(window).height();


    // Research section
    if (winPos > (researchTop - (winHt / 2))) {
      $("#research .research-topics .topic").each(function(i){
        setTimeout(function(){
          $("#research .research-topics .topic").eq(i).removeClass("from-below");
        }, 400 * i);
      });
    }

    // Projects section
    if (winPos > (projectsTop - (winHt / 2))) {
      workWheelSetup();
    }
  });
}

resizeEvents = function() {
  $(window).resize(function(){
    researchInfoSetup();
    workWheelSetup();
  });
}
