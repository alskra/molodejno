import Rellax from 'rellax';
import '../score/score';
import '../events/events';
import '../projects/projects';
import './section.scss';

// eslint-disable-next-line
// const rellax = new Rellax('.section__rellax', {
// 	center: true,
// });

document.addEventListener('DOMContentLoaded', () => setTimeout(() => new Rellax('.section__rellax', {
	center: true,
})));
