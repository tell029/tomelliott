$(document).foundation();

$(document).ready(function(){
  navigationScrolling();
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
