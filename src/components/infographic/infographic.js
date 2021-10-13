import Alpine from 'alpinejs';
import 'swiper/css/bundle';
import Swiper from 'swiper';
import '../score-animated/score-animated';
import './infographic.scss';

Alpine.data('infographic', () => ({
	swiper: undefined,
	init() {
		this.swiper = new Swiper(this.$refs.container, {
			slidesPerView: 'auto',
		});
	},
}));
