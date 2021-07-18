import ResizeObserver from 'resize-observer-polyfill';

const resizeObserver = new ResizeObserver(() =>
	document.documentElement.style
		.setProperty('--scrollbar-width', `${innerWidth - document.body.clientWidth}px`));

resizeObserver.observe(document.body);
