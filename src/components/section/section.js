import Rellax from 'rellax';
import '../score/score';
import '../events/events';
import '../cards/cards';
import './section.scss';

const sectionRellaxEls = document.querySelectorAll('.section__rellax');

if (sectionRellaxEls.length) {
	window.addEventListener('load', () => new Rellax('.section__rellax', {
		center: true,
	}));
}
