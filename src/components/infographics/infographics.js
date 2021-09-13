import Alpine from 'alpinejs';
import 'swiper/css/bundle';
import Swiper from 'swiper';
import '../score-animated/score-animated';
import './infographics.scss';

Alpine.data('infographics', () => ({
	init() {
		this.swiper = new Swiper(this.$refs.container, {
			slidesPerView: 'auto',
		});
	},
}));
