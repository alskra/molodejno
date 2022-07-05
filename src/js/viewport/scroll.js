export default class ViewportScroll {
	static getElFromHash(hash) {
		return document.getElementById(hash.replace('#', ''));
	}

	static stripHash(url) {
		url = new URL(url);

		return url.href.replace(url.hash, '');
	}

	static handleScrollDirection() {
		let value = scrollY;
		let oldValue = scrollY;

		window.addEventListener('scroll', () => {
			value = scrollY;

			window.dispatchEvent(new CustomEvent('scroll-change', {
				detail: {
					value,
					oldValue,
					delta: value - oldValue,
					dir: value > oldValue ? 'down' : 'up',
				},
			}));

			oldValue = value;
		}, {passive: true});
	}

	getBoundary() {
		return (this.boundaryEl || 0) && Math.floor(this.boundaryEl.getBoundingClientRect().bottom);
	}

	scrollToTarget(targetEl) {
		scrollTo(0, scrollY + targetEl.getBoundingClientRect().top - this.getBoundary());
	}

	handleLoad() {
		document.documentElement.style.scrollBehavior = 'auto';

		window.addEventListener('load', () => {
			setTimeout(() => {
				if (this.boundaryEl) {
					const targetEl = ViewportScroll.getElFromHash(location.hash);

					if (targetEl && Math.floor(targetEl.getBoundingClientRect().top) === 0) {
						scrollBy(0, -this.getBoundary());
					}
				}

				document.documentElement.style.scrollBehavior = '';
			});
		});
	}

	handleHashChange() {
		window.addEventListener('hashchange', () => {
			const targetEl = ViewportScroll.getElFromHash(location.hash);

			if (targetEl) {
				this.scrollToTarget(targetEl);
			}
		});
	}

	handleAnchors() {
		document.addEventListener('click', (evt) => {
			if (evt.target.tagName === 'A' && ViewportScroll.stripHash(evt.target.href) === ViewportScroll.stripHash(location.href)) {
				evt.preventDefault();

				const targetEl = ViewportScroll.getElFromHash(evt.target.hash);

				if (targetEl) {
					/**
					 * Push a state if target element is existed
					 */
					if (evt.target.hash !== location.hash) {
						history.pushState(null, null, evt.target.hash);
					}

					this.scrollToTarget(targetEl);
				}
			}
		});
	}

	initSpy() {
		let timeoutID;

		window.addEventListener('scroll', () => {
			clearTimeout(timeoutID);

			timeoutID = setTimeout(() => {
				let currentTarget;

				document.querySelectorAll('[data-scroll]').forEach((targetEl) => {
					if (Math.floor(targetEl.getBoundingClientRect().top) <= this.getBoundary()) {
						currentTarget = targetEl;
					}
				});

				if (currentTarget && `#${currentTarget.id}` !== location.hash) {
					history.replaceState(null, null, `#${currentTarget.id}`);
					window.dispatchEvent(new CustomEvent('scroll-hashchange'));
				} else if (!currentTarget) {
					history.replaceState(null, null, ViewportScroll.stripHash(location.href));
					window.dispatchEvent(new CustomEvent('scroll-hashchange'));
				}
			}, 100);
		}, {passive: true});
	}

	constructor({
		boundaryEl = null,
		spy = false,
	} = {}) {
		this.boundaryEl = boundaryEl;
		this.handleLoad();
		ViewportScroll.handleScrollDirection();

		if (boundaryEl) {
			/**
			 * Change hash or navigation with hash change is emit two events: `popstate` and `hashchange`
			 */
			// this.handleHashChange();
			this.handleAnchors();
		}

		if (spy) {
			this.initSpy();
		}
	}
}
