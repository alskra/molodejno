import Alpine from 'alpinejs';
import './form-feedback.scss';

Alpine.data('formFeedback', () => ({
	isValid: null,
	isSubmit: false,
	success: null,
	error: null,
	messageTimer: null,
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
					this.success = 'Success submit!';

					this.messageTimer = setTimeout(() => {
						this.success = null;
					}, 5000);

					this.error = null;
				} else {
					throw new Error(`HTTP Error: ${response.status} (${response.statusText})`);
				}
			} catch (error) {
				clearTimeout(this.messageTimer);
				this.success = null;
				this.error = error;
			} finally {
				this.isSubmit = false;
			}
		}
	},
}));
