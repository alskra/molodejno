export function getElFromHash() {
	return (location.hash || null) && document.querySelector(location.hash);
}

export function setBoundaryEl(boundaryEl) {
	function getBoundary() {
		return Math.floor(boundaryEl.getBoundingClientRect().bottom);
	}

	window.addEventListener('load', () => {
		if (boundaryEl) {
			setTimeout(() => {
				const targetEl = getElFromHash();

				if (targetEl && Math.floor(targetEl.getBoundingClientRect().top) === 0) {
					scrollBy(0, -getBoundary());
				}
			});
		}
	});

	window.addEventListener('hashchange', () => {
		scrollTo(0, scrollY + getElFromHash().getBoundingClientRect().top - getBoundary());
	});
}
