export default class Scroll {
	static getElFromHash(hash) {
		return document.getElementById(hash.replace('#', ''));
	}

	static stripHash(url) {
		url = new URL(url);

		return url.href.replace(url.hash, '');
	}

	getBoundary() {
		return (this.boundaryEl || 0) && Math.floor(this.boundaryEl.getBoundingClientRect().bottom);
	}

	scrollToTarget(targetEl) {
		scrollTo(0, scrollY + targetEl.getBoundingClientRect().top - this.getBoundary());
	}

	constructor({boundaryEl = null, spy = false} = {}) {
		this.boundaryEl = boundaryEl;

		/**
		 * Scroll handling when load
		 */
		document.documentElement.style.scrollBehavior = 'auto';

		window.addEventListener('load', () => {
			setTimeout(() => {
				if (this.boundaryEl) {
					const targetEl = Scroll.getElFromHash(location.hash);

					if (targetEl && Math.floor(targetEl.getBoundingClientRect().top) === 0) {
						scrollBy(0, -this.getBoundary());
					}
				}

				document.documentElement.style.scrollBehavior = '';
			});
		});

		if (this.boundaryEl) {
			/**
			 * Change hash or navigation with hash change is emit two events: `popstate` and `hashchange`
			 */
			// window.addEventListener('hashchange', () => {
			// 	const targetEl = Scroll.getElFromHash(location.hash);
			//
			// 	if (targetEl) {
			// 		this.scrollToTarget(targetEl);
			// 	}
			// });

			/**
			 * Anchor link handling
			 */
			document.addEventListener('click', (evt) => {
				if (evt.target.tagName === 'A' && Scroll.stripHash(evt.target.href) === Scroll.stripHash(location.href)) {
					evt.preventDefault();

					const targetEl = Scroll.getElFromHash(evt.target.hash);

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

		if (spy) {
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
						window.dispatchEvent(new Event('scroll-hashchange'));
					} else if (!currentTarget) {
						history.replaceState(null, null, Scroll.stripHash(location.href));
						window.dispatchEvent(new Event('scroll-hashchange'));
					}
				}, 100);
			}, {passive: true});
		}
	}
}
