import Alpine from 'alpinejs';
import './pagination.scss';

Alpine.data('pagination', (url, containerEl) => ({
	error: null,
	url,
	containerEl,
	async load() {
		const response = await fetch(this.url);

		if (response.ok) {
			const html = (await response.text()).trim();

			this.containerEl.insertAdjacentHTML('beforeend', html);
		} else {
			this.error = `HTTP Error: ${response.status}`;
		}
	},
}));
