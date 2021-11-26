import Alpine from 'alpinejs';
import 'swiper/css/bundle';
import Swiper from 'swiper';
import '../score-animated/score-animated';
import './infographic.scss';

Alpine.data('infographic', (onlyMobile = true) => {
	let inst;

	return {
		swiper: undefined,
		swiperIsInit: false,
		get hasSwiper() {
			return !(onlyMobile && this.$store.isDesktop);
		},
		init() {
			inst = this;
		},
		destroy() {
			inst.destroySwiper();
		},
		initSwiper() {
			if (!this.swiperIsInit) {
				this.swiper = new Swiper(this.$refs.swiper, {
					slidesPerView: 'auto',
					on: {
						init: () => {
							this.swiperIsInit = true;
						},
						destroy: () => {
							this.swiperIsInit = false;
						},
					},
				});
			}
		},
		destroySwiper() {
			if (this.swiperIsInit) {
				this.swiper.destroy();
			}
		},
		effect() {
			if (this.hasSwiper) {
				this.$nextTick(() => this.initSwiper());
			} else {
				this.destroySwiper();
			}
		},
	};
});
