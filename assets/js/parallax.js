export default class Parallax {
  constructor() {
    this.objects = [];

    var p = this;
    $(window).scroll(function(e){
      p.parallax();
    });
  }

  add(selector) {
    // add selector
    var x = $(selector);
    this.objects.push({
      'object': x,
      'top': x.offset().top,
      'height': x.height()
    });
  }

  parallax() {
    var scrolled = $(window).scrollTop();
    var winht = $(window).height();
    // only working for one atm...
    const obj = this.objects[0];
    var x = 0;
    if (scrolled <= obj.top - winht) {
      // if scrolled < object.top -> position = 100%
      x = 100;
    } else if (scrolled >= obj.top + obj.height) {
      // if scrolled > object.top+height -> position = 0%
      x = 0;
    } else {
      // else in between
      x = 100 * (obj.top + obj.height - scrolled) / (obj.top + obj.height);
    }
    obj.object.css('background-position', 'center ' + x + '%')
  }
}
