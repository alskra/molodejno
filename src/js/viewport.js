import ResizeObserver from 'resize-observer-polyfill';

const callbacks = [];

function setViewportHeight() {
	document.documentElement.style.setProperty('--vh', `${innerHeight / 100}px`);
}

function setBodySizes() {
	const style = getComputedStyle(document.body);
	const contentWidth = document.body.clientWidth - parseFloat(style.paddingLeft) -
		parseFloat(style.paddingRight);

	document.documentElement.style.setProperty('--body-content-width', `${contentWidth}px`);
}

function setScroll() {
	document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
}

setViewportHeight();
setBodySizes();
setScroll();

window.addEventListener('resize', () => {
	setViewportHeight();
	callbacks.forEach((callback) => callback());
});

const resizeObserver = new ResizeObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.target === document.body) {
			// eslint-disable-next-line no-console
			console.log('resize body');
			setBodySizes();
		}
	});
});

resizeObserver.observe(document.body);

window.addEventListener('scroll', () => {
	setScroll();
}, {passive: true});

const mutationObserver = new MutationObserver((records) => {
	records.forEach((record) => {
		// eslint-disable-next-line no-console
		console.log(record);
	});
});

mutationObserver.observe(document, {
	subtree: true,
	childList: true,
	attributes: true,
	characterData: true,
	attributeOldValue: true,
});
