export default class Project {
  constructor() {
    this.active = -1;
    // add handler
    var p = this;
    $(".project-item").on("click", function() {
      if (p.active >= 0){
        $(".project-item").eq(p.active).find('.project-body').slideUp();
      }
      const i = $(".project-item").index($(this));
      if (i == p.active) {
        p.active = -1;
        return;
      }
      p.active = i;
      $(".project-item").eq(p.active).find('.project-body').slideDown();
    });
    // then make first one visible
  }
}
