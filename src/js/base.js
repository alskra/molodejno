import '../css/fonts.scss';
import 'normalize.css';
import '../css/base.scss';
import '../css/helpers.scss';

import 'ninelines-ua-parser';
import 'focus-visible';
import './vh-fix';
import './scrollbar-width';

import Alpine from 'alpinejs';

import '../components/container/container.scss';
import '../components/heading/heading.scss';
import '../components/icon-svg/icon-svg';
import '../components/button/button';
import '../components/more-link/more-link';

window.Alpine = Alpine;

Alpine.store('isDesktop', innerWidth >= 1025);

window.addEventListener('resize', () => {
	Alpine.store('isDesktop', innerWidth >= 1025);
});
