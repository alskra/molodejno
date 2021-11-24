import Alpine from 'alpinejs';
import IMask from 'imask';
import './form-field.scss';

Alpine.data('formField', () => ({
	mask: undefined,
	init() {
		if (this.$root.type === 'tel') {
			// this.$root.placeholder = '+7 (000) 000-00-00';
			// eslint-disable-next-line
			this.$root.pattern = '\\+7 \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}';
			this.mask = new IMask(this.$root, {
				mask: '+{7} (000) 000-00-00',
				// lazy: false, // make placeholder always visible
				// placeholderChar: '0', // defaults to '_'
			});
		}
	},
}));
