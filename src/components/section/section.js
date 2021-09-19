import Rellax from 'rellax';
import '../score/score';
import '../events/events';
import '../projects/projects';
import './section.scss';

window.addEventListener('load', () => new Rellax('.section__rellax', {
	center: true,
}));
