import Alpine from 'alpinejs';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import './infographics.scss';

gsap.registerPlugin(ScrollTrigger);

Alpine.data('infographics', () => ({
	init() {
		this.swiper = new Swiper(this.$refs.container, {
			slidesPerView: 'auto',
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.infographics__items',
				start: 'top bottom-=120',
				toggleActions: 'play pause resume none', // onEnter, onLeave, onEnterBack, and onLeaveBack
			},
		});

		tl.from('.infographics__number', {
			autoAlpha: 0,
			duration: 0.2,
		}).from('.infographics__number', {
			textContent: 0,
			duration: 1.4,
			onUpdate() {
				this.targets().forEach((target) => {
					target.innerHTML = Math.ceil(target.textContent).toLocaleString('ru');
				});
			},
		}, '-=0.2').from('.infographics__plus', {
			autoAlpha: 0,
			duration: 0.2,
		});
	},
}));
