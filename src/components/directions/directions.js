import Alpine from 'alpinejs';
import '../marquee/marquee';
import './directions.scss';

Alpine.data('directions', (...marqueeOptionsList) => ({
	get marqueeOptionsList() {
		return this.$store.isDesktop ? marqueeOptionsList : [undefined];
	},
}));
