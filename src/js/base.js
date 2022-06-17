// Styles
import 'normalize.css';
import '/css/fonts.scss';
import '/css/root.scss';
import '/css/base.scss';
import '/css/helpers.scss';

// PostCSS Preset Env Polyfills
import cssBlankPseudo from 'css-blank-pseudo/browser';
import 'focus-visible';
import focusWithin from 'focus-within';
import cssHasPseudo from 'css-has-pseudo/browser';

// Modules
import 'ninelines-ua-parser';
import './viewport';
import scopedCss from './scoped-css';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Components
import '/components/icon-svg/icon-svg';
import '/components/line-clamp/line-clamp';
import '/components/container/container';
import '/components/content/content';
import '/components/heading/heading';
import '/components/button/button';
import '/components/button-arrow/button-arrow';
import '/components/button-arrow-text/button-arrow-text';
import '/components/button-expand/button-expand';
import '/components/button-load/button-load';
import '/components/date/date';
import '/components/location/location';
import '/components/price/price';
import '/components/organizer/organizer';
import '/components/author/author';
import '/components/breadcrumbs/breadcrumbs';
import '/components/tags/tags';
import '/components/doc-item/doc-item';
import '/components/share/share';
import '/components/integration/integration';
import '/components/video/video';
import '/components/form-field/form-field';
import '/components/form-check/form-check';

// PostCSS Preset Env Polyfills
cssBlankPseudo(document);
focusWithin(document);
cssHasPseudo(document);

const start = performance.now();

scopedCss();

// eslint-disable-next-line no-console
console.log(performance.now() - start);

AOS.init();
