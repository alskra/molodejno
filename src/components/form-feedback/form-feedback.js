import Alpine from 'alpinejs';
import './form-feedback.scss';

Alpine.data('formFeedback', () => ({
	isValid: undefined,
	isSubmit: false,
	success: false,
	error: null,
	validate(obj) {
		const target = obj.target || obj;
		const valid = target.validity.valid;

		target.classList.toggle('is-invalid', !valid);

		return valid;
	},
	formValidate() {
		this.isValid = true;

		for (const item of this.$root.querySelectorAll('input, textarea')) {
			if (!this.validate(item)) {
				this.isValid = false;
				break;
			}
		}
	},
	async submit(evt) {
		evt.preventDefault();
		this.formValidate();

		if (this.isValid) {
			try {
				this.isSubmit = true;

				const response = await fetch(this.$root.action, {
					method: 'POST',
					// body: new FormData(this.$root),
				});

				if (response.ok) {
					this.error = null;
					this.success = true;
				} else {
					this.error = `Ошибка HTTP: ${response.status} (${response.statusText})`;
				}
			} catch (error) {
				this.error = error;
			} finally {
				this.isSubmit = false;
			}
		}
	},
}));
