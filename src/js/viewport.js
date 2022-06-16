import ResizeObserver from 'resize-observer-polyfill';

const htmlEl = document.documentElement;
const bodyEl = document.body;
const callbacks = [];

function setViewportHeight() {
	htmlEl.style.setProperty('--vh', `${innerHeight / 100}px`);
}

function setBodySizes(contentSizes) {
	let contentWidth;

	if (contentSizes) {
		contentWidth = contentSizes.inlineSize || contentSizes.width;
	} else {
		const style = getComputedStyle(bodyEl);
		contentWidth = bodyEl.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
	}

	htmlEl.style.setProperty('--body-content-width', `${contentWidth}px`);
}

function setScroll() {
	htmlEl.style.setProperty('--scroll-y', `${scrollY}px`);
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
		// eslint-disable-next-line no-nested-ternary
		const contentSizes = entry.contentBoxSize ?
			entry.contentBoxSize[0] ? entry.contentBoxSize[0] : entry.contentBoxSize :
			entry.contentRect;

		if (entry.target === bodyEl) {
			setBodySizes(contentSizes);
		}
	});
});

resizeObserver.observe(bodyEl);

window.addEventListener('scroll', () => {
	setScroll();
	callbacks.forEach((callback) => callback());
}, {passive: true});

const mutationObserver = new MutationObserver((records) => {
	records.forEach((record) => {
		if (record.type !== 'attributes' || record.target.getAttribute(record.attributeName) !== record.oldValue) {
			// eslint-disable-next-line no-console
			// console.log(record);
			callbacks.forEach((callback) => callback());
		}
	});
});

mutationObserver.observe(document, {
	subtree: true,
	childList: true,
	attributes: true,
	attributeOldValue: true,
	characterData: true,
});
