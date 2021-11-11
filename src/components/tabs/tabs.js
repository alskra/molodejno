import Alpine from 'alpinejs';
import '../swiper-free/swiper-free';
import './tabs.scss';

Alpine.data('tabs', () => ({
	tab: 1,
	init() {
		this.$root.querySelectorAll('.tabs__item').forEach((item, index) => {
			item.setAttribute('x-bind:class', `{'is-active': tab === ${index + 1}}`);
			item.setAttribute('x-on:click', `tab = ${index + 1}`);
		});

		this.$root.querySelectorAll('.tabs__frame').forEach((item, index) => {
			item.setAttribute('x-show', `tab === ${index + 1}`);
			item.setAttribute('x-transition.opacity', '');
		});
	},
}));
