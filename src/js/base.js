import '../css/fonts.scss';
import 'normalize.css';
import '../css/root.scss';
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
import '../components/container/container';
import '../components/heading/heading';
import '../components/date/date';
import '../components/location/location';
import '../components/button/button';
import '../components/button-arrow/button-arrow';
import '../components/button-arrow-text/button-arrow-text';
import '../components/button-expand/button-expand';
import '../components/button-load/button-load';
import '../components/integration/integration';
import '../components/breadcrumbs/breadcrumbs';
import '../components/price/price';
import '../components/organizer/organizer';
import '../components/content/content';
import '../components/content-edited/content-edited';
import '../components/line-clamp/line-clamp';
import '../components/share/share';

window.Alpine = Alpine;

Alpine.store('isDesktop', innerWidth >= 1025);
window.addEventListener('resize', () => {
	Alpine.store('isDesktop', innerWidth >= 1025);
});

AOS.init();
