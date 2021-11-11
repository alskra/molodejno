import Alpine from 'alpinejs';
import Masonry from 'masonry-layout';
import './activities.scss';

Alpine.data('activities', () => ({
	masonry: undefined,
	init() {
		this.masonry = new Masonry(this.$refs.grid, {
			gutter: '.gutter-sizer',
			itemSelector: '.activities__item',
		});

		setTimeout(() => this.masonry.layout(), 100);
	},
}));
