import '@fancyapps/ui/dist/fancybox.css';
import {Fancybox} from '@fancyapps/ui';
import './modal.scss';

Fancybox.bind('[data-fancybox-modal]', {
	mainClass: 'fancybox__container--modal',
	closeButton: 'outside',
	template: {
		closeButton: '',
	},
	touch: false,
});
