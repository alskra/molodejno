import Alpine from 'alpinejs';
import './app.scss';

window.Alpine = Alpine;
Alpine.store('isDesktop', innerWidth >= 1025);

window.addEventListener('resize', () => {
	Alpine.store('isDesktop', innerWidth >= 1025);
});

Alpine.start();
