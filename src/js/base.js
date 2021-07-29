import '../css/fonts.scss';
import 'normalize.css';
import '../css/base.scss';
import '../css/helpers.scss';

import 'ninelines-ua-parser';
import 'focus-visible';
import './vh-fix';
import './scrollbar-width';
import 'aos/dist/aos.css';
import AOS from 'aos';

import Alpine from 'alpinejs';

import '../components/icon-svg/icon-svg';
import '../components/container/container.scss';
import '../components/heading/heading.scss';
import '../components/date/date.scss';
import '../components/location/location.scss';
import '../components/more-link/more-link';
import '../components/integration/integration.scss';

window.Alpine = Alpine;

Alpine.store('isDesktop', innerWidth >= 1025);

window.addEventListener('resize', () => {
	Alpine.store('isDesktop', innerWidth >= 1025);
});

AOS.init();
