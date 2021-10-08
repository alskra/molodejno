import Alpine from 'alpinejs';
import './pagination.scss';

Alpine.data('pagination', (url, containerEl) => ({
	error: null,
	isLoading: false,
	url,
	containerEl,
	async load() {
		try {
			this.isLoading = true;

			const response = await fetch(this.url);

			if (response.ok) {
				const html = (await response.text()).trim();

				this.error = null;
				this.containerEl.insertAdjacentHTML('beforeend', html);
			} else {
				this.error = `HTTP Error: ${response.status}`;
			}
		} catch (error) {
			this.error = error;
		} finally {
			this.isLoading = false;
		}
	},
}));
