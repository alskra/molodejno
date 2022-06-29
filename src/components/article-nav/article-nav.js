import Alpine from 'alpinejs';
import './article-nav.scss';

Alpine.data('articleNav', () => ({
	hashes: undefined,
	targets: undefined,
	hash: location.hash,
	border: 0,
	init() {
		this.hashes = Array.from(this.$root.querySelectorAll('.article-nav__item')).map((item) => item.hash);
		this.targets = Array.from(document.querySelectorAll('[id]'))
			.filter((item) => this.hashes.includes(`#${item.id}`));
	},
	update() {
		let currentTarget;

		for (let target of this.targets) {
			const rect = target.getBoundingClientRect();

			if (Math.floor(rect.top) <= this.border) {
				currentTarget = target;
			}
		}

		if (currentTarget) {
			history.replaceState(null, null, `#${currentTarget.id}`);
			this.hash = location.hash;
		}
	},
}));
