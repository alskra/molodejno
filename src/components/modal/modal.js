import Alpine from 'alpinejs';
import '@fancyapps/ui/dist/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import './modal.scss';

Alpine.data('modal', () => ({}));

Fancybox.bind('[data-fancybox-modal]', {
	mainClass: 'fancybox__container--modal',
	closeButton: 'outside',
	template: {
		closeButton: '',
	},
	on: {
		destroy: (fancybox) => {
			const formEl = fancybox.$container.querySelector('form');

			if (formEl) {
				formEl.reset();
				formEl.querySelectorAll('[type="tel"]').forEach((item) => item.imask.updateValue());
			}
		},
	},
});
