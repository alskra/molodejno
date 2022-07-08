// Styles
import 'normalize.css';
import '@css/fonts.scss';
import '@css/root.scss';
import '@css/base.scss';
import '@css/helpers.scss';

// Modules
import 'ninelines-ua-parser';
import '@js/postcss-polyfills';
// import 'scoped-css/css';
import scopedCss from 'scoped-css';
import Viewport from '@js/viewport';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Components
import '@components/icon-svg/icon-svg';
import '@components/line-clamp/line-clamp';
import '@components/container/container';
import '@components/content/content';
import '@components/heading/heading';
import '@components/button/button';
import '@components/button-arrow/button-arrow';
import '@components/button-arrow-text/button-arrow-text';
import '@components/button-expand/button-expand';
import '@components/button-load/button-load';
import '@components/date/date';
import '@components/location/location';
import '@components/price/price';
import '@components/organizer/organizer';
import '@components/author/author';
import '@components/breadcrumbs/breadcrumbs';
import '@components/tags/tags';
import '@components/doc-item/doc-item';
import '@components/share/share';
import '@components/integration/integration';
import '@components/video/video';
import '@components/form-field/form-field';
import '@components/form-check/form-check';

scopedCss(undefined, { debug: true });

export const viewport = new Viewport({
	sizesProperties: true,
	scrollOptions: {
		boundaryEl: document.querySelector('.header'),
		spy: true,
	},
});

AOS.init();
