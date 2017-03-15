$(document).ready(function() {
    $("#researchnav ul li").on("click", function() {
        $this = $(this);

        // remove class `active` from current, add to clicked
        $("#researchnav ul li.active").removeClass("active");
        $this.addClass("active");

        // get index of clicked
        $ind = $("#researchnav ul li").index($this);

        // translate body
        $("#researchItemContainer").css("transform", "translateX(-" + $ind * 100 + "%)");
    });
});
