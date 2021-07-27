import Alpine from 'alpinejs';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import '../project-item/project-item';
import './projects.scss';

Alpine.data('projects', () => ({
	swiperIsInit: false,
	get isDesktop() {
		return this.$store.isDesktop;
	},
	init() {
		this.swiper = new Swiper(this.$refs.swiperContainer, {
			init: false,
			slidesPerView: 'auto',
		});

		const swiper = () => {
			if (!this.isDesktop) {
				this.initSwiper();
			} else {
				this.destroySwiper();
			}
		};

		swiper();
		this.$watch('isDesktop', swiper);
	},
	destroy() {
		Object.defineProperty(this, 'isDesktop', {value: false});
		this.destroySwiper();
	},
	initSwiper() {
		if (!this.swiperIsInit) {
			this.swiper.on('init', () => {
				this.swiper.destroyed = false;
				this.swiperIsInit = true;
			});
			this.swiper.on('destroy', () => {
				this.swiper.destroyed = true;
				this.swiperIsInit = false;
			});
			this.swiper.init();
		}
	},
	destroySwiper() {
		if (this.swiperIsInit) {
			this.swiper.destroy(false);
		}
	},
}));
