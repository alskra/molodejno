import Rellax from 'rellax';
import '../score/score';
import '../events/events';
import '../card-list/card-list';
import './section.scss';

window.addEventListener('load', () => new Rellax('.section__rellax', {
	center: true,
}));
