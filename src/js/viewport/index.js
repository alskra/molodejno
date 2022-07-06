import ResizeObserver from 'resize-observer-polyfill';
import ViewportScroll from './scroll';

export default class Viewport {
	root = document.documentElement;

	body = document.body;

	callbacks = [];

	setVHProperty() {
		this.root.style.setProperty('--vh', `${innerHeight / 100}px`);
	}

	setScrollProperty() {
		this.root.style.setProperty('--scroll-y', `${scrollY}px`);
	}

	setSizesProperties(contentSizes) {
		let contentWidth;

		if (contentSizes) {
			contentWidth = contentSizes.inlineSize || contentSizes.width;
		} else {
			const style = getComputedStyle(this.body);

			contentWidth = this.body.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
		}

		this.root.style.setProperty('--body-content-width', `${contentWidth}px`);
	}

	constructor({
		vhProperty = true,
		scrollProperty = false,
		sizesProperties = false,
		mutationObserver = false,
		scrollOptions,
	} = {}) {
		if (vhProperty) {
			this.setVHProperty();

			window.addEventListener('resize', () => {
				this.setVHProperty();
				this.callbacks.forEach((callback) => callback());
			});
		}

		if (scrollProperty) {
			this.setScrollProperty();

			window.addEventListener('scroll', () => {
				this.setScrollProperty();
				this.callbacks.forEach((callback) => callback());
			}, { passive: true });
		}

		if (sizesProperties) {
			this.setSizesProperties();

			this.resizeObserver = new ResizeObserver((entries) => {
				entries.forEach((entry) => {
					// eslint-disable-next-line no-nested-ternary
					const contentSizes = entry.contentBoxSize
						? entry.contentBoxSize[0] ? entry.contentBoxSize[0] : entry.contentBoxSize
						: entry.contentRect;

					if (entry.target === this.body) {
						this.setSizesProperties(contentSizes);
					}
				});
			});

			this.resizeObserver.observe(this.body);
		}

		if (mutationObserver) {
			this.mutationObserver = new MutationObserver((records) => {
				// eslint-disable-next-line no-console
				// console.log(records);

				records.forEach((record) => {
					if (record.type !== 'attributes' || record.target.getAttribute(record.attributeName) !== record.oldValue) {
						// eslint-disable-next-line no-console
						// console.log(record);
						this.callbacks.forEach((callback) => callback());
					}
				});
			});

			this.mutationObserver.observe(document, {
				subtree: true,
				childList: true,
				attributes: true,
				attributeOldValue: true,
				characterData: true,
			});
		}

		this.scroll = new ViewportScroll(scrollOptions);
	}
}
