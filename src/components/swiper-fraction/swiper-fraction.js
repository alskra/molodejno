import Alpine from 'alpinejs';
import 'swiper/css/bundle';
import Swiper, {Navigation, Pagination} from 'swiper';

Alpine.data('swiperFraction', () => {
	let inst;

	return {
		swiperIsInit: false,
		init() {
			inst = this;
		},
		destroy() {
			inst.destroySwiper();
		},
		initSwiper() {
			if (!this.swiperIsInit) {
				this.swiper = new Swiper(this.$refs.swiper, {
					modules: [Navigation, Pagination],
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
			if (this.$store.isDesktop) {
				this.destroySwiper();
			} else {
				this.$nextTick(() => this.initSwiper());
			}
		},
	};
});
