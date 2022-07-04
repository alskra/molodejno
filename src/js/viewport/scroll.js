export function getElFromHash(hash) {
	return document.getElementById(hash.replace('#', ''));
}

export default function $({boundaryEl, spy = false} = {}) {
	function getBoundary() {
		return Math.floor(boundaryEl.getBoundingClientRect().bottom);
	}

	document.documentElement.style.scrollBehavior = 'auto';

	window.addEventListener('load', () => {
		setTimeout(() => {
			if (boundaryEl) {
				const targetEl = getElFromHash(location.hash);

				if (targetEl && Math.floor(targetEl.getBoundingClientRect().top) === 0) {
					scrollBy(0, -getBoundary());
				}
			}

			document.documentElement.style.scrollBehavior = '';
		});
	});

	if (boundaryEl) {
		/**
		 * Change hash or navigation with hash change is emit two events: `popstate` and `hashchange`
		 */
		// window.addEventListener('hashchange', () => {
		// 	const targetEl = getElFromHash(location.hash);
		//
		// 	if (targetEl) {
		// 		scrollTo(0, scrollY + targetEl.getBoundingClientRect().top - getBoundary());
		// 	}
		// });

		document.addEventListener('click', (evt) => {
			if (evt.target.tagName === 'A' &&
				evt.target.href.replace(/#.*/, '') ===
				location.href.replace(/#.*/, '')) {
				evt.preventDefault();

				const targetEl = getElFromHash(evt.target.hash);

				if (targetEl) {
					scrollTo(0, scrollY + targetEl.getBoundingClientRect().top - getBoundary());
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
					if (Math.floor(targetEl.getBoundingClientRect().top) <= (boundaryEl ? getBoundary() : 0)) {
						currentTarget = targetEl;
					}
				});

				if (currentTarget && `#${currentTarget.id}` !== location.hash) {
					history.replaceState(null, null, `#${currentTarget.id}`);
				} else if (!currentTarget) {
					history.replaceState(null, null, location.href.replace(/#.*/, ''));
				}

				window.dispatchEvent(new Event('scroll-hashchange'));
			}, 100);
		}, {passive: true});
	}
}
