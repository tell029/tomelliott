/* global document */
import Global from './global';
import Parallax from './parallax';
import Project from './project';

document.addEventListener('DOMContentLoaded', () => {
  const g = new Global();
  g.init();

  const p = new Parallax();
  p.add('.separator');
  p.parallax(); // initial setup

  const proj = new Project();
});
