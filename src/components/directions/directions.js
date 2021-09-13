import Alpine from 'alpinejs';
import '../../components/marquee/marquee';
import './directions.scss';

Alpine.data('directions', (...marqueeOptionsList) => ({
	get marqueeOptionsList() {
		return this.$store.isDesktop ? marqueeOptionsList : [undefined];
	},
}));
