import ResizeObserver from 'resize-observer-polyfill';

const setScrollbarWidth = () => document.documentElement.style
	.setProperty('--scrollbar-width', `${innerWidth - document.body.clientWidth}px`);

setScrollbarWidth();

const resizeObserver = new ResizeObserver(setScrollbarWidth);

resizeObserver.observe(document.body);
