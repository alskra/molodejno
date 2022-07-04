function getElFromHash(hash) {
	return document.getElementById(hash.replace('#', ''));
}

function stripHash(url) {
	url = new URL(url);

	return url.href.replace(url.hash, '');
}

export default function $({boundaryEl = null, spy = false} = {}) {
	$.boundaryEl = boundaryEl;

	/**
	 * Scroll handling when load
	 */
	document.documentElement.style.scrollBehavior = 'auto';

	window.addEventListener('load', () => {
		setTimeout(() => {
			if ($.boundaryEl) {
				const targetEl = getElFromHash(location.hash);

				if (targetEl && Math.floor(targetEl.getBoundingClientRect().top) === 0) {
					scrollBy(0, -$.getBoundary());
				}
			}

			document.documentElement.style.scrollBehavior = '';
		});
	});

	if ($.boundaryEl) {
		/**
		 * Change hash or navigation with hash change is emit two events: `popstate` and `hashchange`
		 */
		// window.addEventListener('hashchange', () => {
		// 	const targetEl = getElFromHash(location.hash);
		//
		// 	if (targetEl) {
		// 		$.scrollToTarget(targetEl);
		// 	}
		// });

		/**
		 * Anchor link handling
		 */
		document.addEventListener('click', (evt) => {
			if (evt.target.tagName === 'A' && stripHash(evt.target.href) === stripHash(location.href)) {
				evt.preventDefault();

				const targetEl = getElFromHash(evt.target.hash);

				if (targetEl) {
					/**
					 * Push a state if target element is existed
					 */
					if (evt.target.hash !== location.hash) {
						history.pushState(null, null, evt.target.hash);
					}

					$.scrollToTarget(targetEl);
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
					if (Math.floor(targetEl.getBoundingClientRect().top) <= $.getBoundary()) {
						currentTarget = targetEl;
					}
				});

				if (currentTarget && `#${currentTarget.id}` !== location.hash) {
					history.replaceState(null, null, `#${currentTarget.id}`);
					window.dispatchEvent(new Event('scroll-hashchange'));
				} else if (!currentTarget) {
					history.replaceState(null, null, stripHash(location.href));
					window.dispatchEvent(new Event('scroll-hashchange'));
				}
			}, 100);
		}, {passive: true});
	}
}

Object.assign($, {
	getBoundary() {
		return ($.boundaryEl || 0) && Math.floor($.boundaryEl.getBoundingClientRect().bottom);
	},
	scrollToTarget(targetEl) {
		scrollTo(0, scrollY + targetEl.getBoundingClientRect().top - $.getBoundary());
	},
});
