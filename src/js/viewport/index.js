import ResizeObserver from 'resize-observer-polyfill';
import Scroll from './scroll';

export default function $(
	{
		vhProperty = true,
		scrollProperty = false,
		sizesProperties = false,
		mutationObserver = false,
		scrollOptions,
	} = {}) {
	$.scroll = new Scroll(scrollOptions);

	if (vhProperty) {
		$.setVHProperty();
		window.addEventListener('resize', () => {
			$.setVHProperty();
			$.callbacks.forEach((callback) => callback());
		});
	}

	if (scrollProperty) {
		$.setScrollProperty();

		window.addEventListener('scroll', () => {
			$.setScrollProperty();
			$.callbacks.forEach((callback) => callback());
		}, {passive: true});
	}

	if (sizesProperties) {
		$.setSizesProperties();

		$.resizeObserver = new ResizeObserver((entries) => {
			entries.forEach((entry) => {
				// eslint-disable-next-line no-nested-ternary
				const contentSizes = entry.contentBoxSize ?
					entry.contentBoxSize[0] ? entry.contentBoxSize[0] : entry.contentBoxSize :
					entry.contentRect;

				if (entry.target === $.body) {
					$.setSizesProperties(contentSizes);
				}
			});
		});

		$.resizeObserver.observe($.body);
	}

	if (mutationObserver) {
		$.mutationObserver = new MutationObserver((records) => {
			// eslint-disable-next-line no-console
			// console.log(records);

			records.forEach((record) => {
				if (record.type !== 'attributes' || record.target.getAttribute(record.attributeName) !== record.oldValue) {
					// eslint-disable-next-line no-console
					// console.log(record);
					$.callbacks.forEach((callback) => callback());
				}
			});
		});

		$.mutationObserver.observe(document, {
			subtree: true,
			childList: true,
			attributes: true,
			attributeOldValue: true,
			characterData: true,
		});
	}
}

Object.assign($, {
	root: document.documentElement,
	body: document.body,
	callbacks: [],
	setVHProperty() {
		$.root.style.setProperty('--vh', `${innerHeight / 100}px`);
	},
	setScrollProperty() {
		$.root.style.setProperty('--scroll-y', `${scrollY}px`);
	},
	setSizesProperties(contentSizes) {
		let contentWidth;

		if (contentSizes) {
			contentWidth = contentSizes.inlineSize || contentSizes.width;
		} else {
			const style = getComputedStyle($.body);

			contentWidth = $.body.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
		}

		$.root.style.setProperty('--body-content-width', `${contentWidth}px`);
	},
});
