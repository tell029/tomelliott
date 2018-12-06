export default class Project {
  constructor() {
    this.active = -2;
    // add handler
    const _this = this;
    $(".project-item label").on("click", (e) => {
      this.clickHandler(e.currentTarget.parentNode);
    });

    // then make first one visible when scrolled to
    // this.top = $(".project-list").offset().top;
    // $(window).scroll(() => {
    //   const win = $(window);
    //   if (this.active == -2 && win.scrollTop() + win.height()*0.75 > this.top) {
    //     this.active = 0;
    //     this.show(0);
    //   }
    // });
  }

  clickHandler(proj) {
    const i = $(".project-item").index( proj );

    if (i == this.active) {
      this.hide(this.active);
      this.active = -1;
      return;
    };

    // hide the currently active project
    this.hide(this.active);

    // show clicked one if different from active
    this.active = i;
    this.show(this.active);
  }

  show (i) {
    if (this.active < 0) return;
    $(".project-item")
      .eq(i)
      .find('.project-body')
      .slideDown();
  }

  hide (i) {
    if (this.active < 0) return;
    $(".project-item")
      .eq(i)
      .find('.project-body')
      .slideUp();
  }
}
