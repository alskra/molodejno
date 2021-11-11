import Alpine from 'alpinejs';
import 'swiper/css/bundle';
import Swiper, {FreeMode} from 'swiper';

Alpine.data('swiperFree', (onlyMobile = true) => {
	let inst;

	return {
		onlyMobile,
		swiper: undefined,
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
					modules: [FreeMode],
					slidesPerView: 'auto',
					freeMode: {
						enabled: true,
						momentum: false,
						momentumBounce: false,
					},
					on: {
						init: () => {
							this.swiperIsInit = true;
						},
						destroy: () => {
							this.swiperIsInit = false;
						},
					},
				});

				setTimeout(() => {
					if (this.swiperIsInit) {
						this.swiper.update();
					}
				}, 1000);
			}
		},
		destroySwiper() {
			if (this.swiperIsInit) {
				this.swiper.destroy();
			}
		},
		effect() {
			if (this.onlyMobile && this.$store.isDesktop) {
				this.destroySwiper();
			} else {
				this.$nextTick(() => this.initSwiper());
			}
		},
	};
});
