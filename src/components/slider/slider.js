import 'swiper/swiper-bundle.css';
import Swiper, {EffectFade} from 'swiper';
import './slider.scss';

Swiper.use([EffectFade]);

const swiper = new Swiper('.swiper-container', {
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
});

export default swiper;
