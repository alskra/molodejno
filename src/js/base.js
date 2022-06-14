import cssBlankPseudo from 'css-blank-pseudo/browser';
import 'focus-visible';
import focusWithin from 'focus-within';
import cssHasPseudo from 'css-has-pseudo/browser';
import scopedCss from './scoped-css';

import '../css/fonts.scss';
import 'normalize.css';
import '../css/root.scss';
import '../css/base.scss';
import '../css/helpers.scss';

import 'ninelines-ua-parser';
import './viewport-sizes';
import 'aos/dist/aos.css';
import AOS from 'aos';

import Alpine from 'alpinejs';

import '../components/icon-svg/icon-svg';
import '../components/line-clamp/line-clamp';
import '../components/container/container';
import '../components/content/content';
import '../components/heading/heading';
import '../components/button/button';
import '../components/button-arrow/button-arrow';
import '../components/button-arrow-text/button-arrow-text';
import '../components/button-expand/button-expand';
import '../components/button-load/button-load';
import '../components/date/date';
import '../components/location/location';
import '../components/price/price';
import '../components/organizer/organizer';
import '../components/author/author';
import '../components/breadcrumbs/breadcrumbs';
import '../components/tags/tags';
import '../components/doc-item/doc-item';
import '../components/share/share';
import '../components/integration/integration';
import '../components/video/video';
import '../components/form-field/form-field';
import '../components/form-check/form-check';

cssBlankPseudo(document);
focusWithin(document);
cssHasPseudo(document);
scopedCss();

AOS.init();

window.Alpine = Alpine;
Alpine.store('isDesktop', innerWidth >= 1025);

window.addEventListener('resize', () => {
	Alpine.store('isDesktop', innerWidth >= 1025);
});
