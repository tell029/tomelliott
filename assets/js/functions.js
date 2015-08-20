$(document).foundation();

$(document).ready(function(){
  navigationScrolling();
  yearsSince();
});


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
