import Alpine from 'alpinejs';
import Masonry from 'masonry-layout';
import './activities.scss';

Alpine.data('activities', () => ({
	masonry: undefined,
	init() {
		this.masonry = new Masonry(this.$refs.grid, {
			itemSelector: '.activities__item',
			gutter: '.activities__gap',
		});

		setTimeout(() => this.masonry.layout(), 500);
	},
}));
