import Alpine from 'alpinejs';
import '@fancyapps/ui/dist/fancybox.css';
import {Fancybox} from '@fancyapps/ui';
import './modal.scss';

Alpine.data('modal', () => ({
	show: false,
	init() {
		this.$root.alpine = this;
	},
}));

Fancybox.bind('[data-fancybox-modal]', {
	mainClass: 'fancybox__container--modal',
	closeButton: 'outside',
	template: {
		closeButton: '',
	},
	// Carousel: {
	// 	touch: false,
	// 	draggable: false,
	// 	drag: false,
	// },
	// touch: false,
	// draggable: false,
	// drag: false,
	on: {
		done: (fancybox) => {
			fancybox.modalEl = fancybox.$container.querySelector('.modal');

			if (fancybox.modalEl) {
				fancybox.modalEl.alpine.show = true;
			}
		},
		destroy: (fancybox) => {
			if (fancybox.modalEl) {
				fancybox.modalEl.alpine.show = false;
			}
		},
	},
});
