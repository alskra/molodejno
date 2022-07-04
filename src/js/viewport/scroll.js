export function getElFromHash() {
	return (location.hash || null) && document.querySelector(location.hash);
}

export default function $({boundaryEl, spy = false} = {}) {
	function getBoundary() {
		return Math.floor(boundaryEl.getBoundingClientRect().bottom);
	}

	document.documentElement.style.scrollBehavior = 'auto';

	window.addEventListener('load', () => {
		setTimeout(() => {
			if (boundaryEl) {
				const targetEl = getElFromHash();

				if (targetEl && Math.floor(targetEl.getBoundingClientRect().top) === 0) {
					scrollBy(0, -getBoundary());
				}
			}

			document.documentElement.style.scrollBehavior = '';
		});
	});

	// if (boundaryEl) {
	// 	window.addEventListener('hashchange', () => {
	// 		const targetEl = getElFromHash();
	//
	// 		if (targetEl) {
	// 			scrollTo(0, scrollY + targetEl.getBoundingClientRect().top - getBoundary());
	// 		}
	// 	});
	// }

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
