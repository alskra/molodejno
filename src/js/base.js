import '../css/fonts.scss';
import 'normalize.css';
import '../css/base.scss';
import '../css/helpers.scss';

import Alpine from 'alpinejs';
import 'focus-visible';
import './vh-fix';
import '../components/icon-svg/icon-svg';
import '../components/button/button';
import '../components/more-link/more-link';

window.Alpine = Alpine;

Alpine.store('isDesktop', innerWidth >= 1025);

window.addEventListener('resize', () => {
	Alpine.store('isDesktop', innerWidth >= 1025);
});
