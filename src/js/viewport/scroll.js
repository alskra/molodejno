export function getElFromHash() {
	return (location.hash || null) && document.querySelector(location.hash);
}

export default function $({scrollBoundaryEl} = {}) {
	function getBoundary() {
		return Math.floor(scrollBoundaryEl.getBoundingClientRect().bottom);
	}

	document.documentElement.style.scrollBehavior = 'auto';

	window.addEventListener('load', () => {
		setTimeout(() => {
			if (scrollBoundaryEl) {
				const targetEl = getElFromHash();

				if (targetEl && Math.floor(targetEl.getBoundingClientRect().top) === 0) {
					scrollBy(0, -getBoundary());
				}
			}

			document.documentElement.style.scrollBehavior = '';
		});
	});

	if (scrollBoundaryEl) {
		window.addEventListener('hashchange', () => {
			scrollTo(0, scrollY + getElFromHash().getBoundingClientRect().top - getBoundary());
		});
	}
}
