import Alpine from 'alpinejs';
import IMask from 'imask';
import './form-field.scss';

Alpine.data('formField', () => ({
	mask: undefined,
	init() {
		if (this.$root.type === 'tel') {
			// this.$root.placeholder = '+7 (000) 000-00-00';
			this.mask = new IMask(this.$root, {
				mask: '+{7} (000) 000-00-00',
				// lazy: false, // make placeholder always visible
				// placeholderChar: '0', // defaults to '_'
			});
		}
	},
}));
