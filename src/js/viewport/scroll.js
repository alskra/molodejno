export default class ViewportScroll {
	#boundary = undefined;

	static getElFromHash(hash) {
		const id = hash.replace(/^#/, '');

		return (id || null) && document.getElementById(id);
	}

	static stripHash(url) {
		return url.replace(/#.*/, '');
	}

	get boundary() {
		return (this.#boundary || 0) && Math.floor(this.#boundary.getBoundingClientRect().bottom);
	}

	set boundary(val) {
		this.#boundary = val;
	}

	scrollToTarget(targetEl) {
		scrollTo(0, scrollY + targetEl.getBoundingClientRect().top - this.boundary);
	}

	// eslint-disable-next-line class-methods-use-this
	handleLoad() {
		// document.documentElement.style.scrollBehavior = 'auto';
		//
		// window.addEventListener('load', () => {
		// 	setTimeout(() => {
		// 		if (this.boundary) {
		// 			const targetEl = ViewportScroll.getElFromHash(location.hash);
		//
		// 			if (targetEl && Math.floor(targetEl.getBoundingClientRect().top) === 0) {
		// 				scrollBy(0, -this.boundary);
		// 			}
		// 		}
		// 	});
		// });
		//
		window.addEventListener('scroll', () => {
			// eslint-disable-next-line no-console
			// console.log('scroll', scrollY);
		});
		//
		// window.addEventListener('popstate', () => {
		// 	// eslint-disable-next-line no-console
		// 	console.log('popstate');
		// });
	}

	handleHashChange() {
		window.addEventListener('hashchange', () => {
			// eslint-disable-next-line no-console
			console.log('hashchange');

			if (!history.state) {
				history.replaceState(history.scrollRestoration, null);

				const targetEl = ViewportScroll.getElFromHash(location.hash);

				if (targetEl) {
					this.scrollToTarget(targetEl);
				}
			}
		});
	}

	// eslint-disable-next-line class-methods-use-this
	handleScrollDirection() {
		let value;
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
		}, { passive: true });
	}

	handleAnchors() {
		document.addEventListener('click', (evt) => {
			const anchorEl = evt.target.closest('a');

			if (anchorEl && anchorEl.href === location.href) {
				evt.preventDefault();

				const targetEl = ViewportScroll.getElFromHash(anchorEl.hash);

				if (targetEl) {
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
					if (Math.floor(targetEl.getBoundingClientRect().top) <= this.boundary) {
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
		}, { passive: true });
	}

	constructor({
		// eslint-disable-next-line no-unused-vars
		boundary = 0,
		spy = false,
	} = {}) {
		// this.boundaryEl = boundaryEl;
		this.handleLoad();
		this.handleHashChange();
		this.handleScrollDirection();
		this.handleAnchors();

		if (spy) {
			this.initSpy();
		}
	}
}
