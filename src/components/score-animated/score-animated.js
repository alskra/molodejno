import Alpine from 'alpinejs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

Alpine.data('scoreAnimated', () => ({
	init() {
		this.$refs.number.innerHTML = (+this.$refs.number.textContent).toLocaleString('ru');

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: this.$el,
				start: 'top bottom-=120',
				end: 'bottom top+=120',
				toggleActions: 'play pause play pause', // onEnter, onLeave, onEnterBack, and onLeaveBack
			},
		});

		tl.from(this.$refs.numberAnimated, {
			autoAlpha: 0,
			duration: 0.2,
		}).from(this.$refs.numberAnimated, {
			textContent: 0,
			duration: 1.4,
			onUpdate() {
				this.targets().forEach((target) => {
					// eslint-disable-next-line no-param-reassign
					target.innerHTML = Math.ceil(target.textContent).toLocaleString('ru');
				});
			},
		}, '-=0.2').from(this.$refs.plus, {
			autoAlpha: 0,
			duration: 0.2,
		});
	},
}));
