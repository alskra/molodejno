import Alpine from 'alpinejs';
import './article-nav.scss';

Alpine.data('articleNav', () => ({
	hashes: [],
	hash: location.hash,
	border: 0,
	get targets() {
		return Array.from(document.querySelectorAll('[id]'))
			.filter((item) => this.hashes.includes(`#${item.id}`));
	},
	update() {
		let currentTarget;

		for (const target of this.targets) {
			const rect = target.getBoundingClientRect();

			if (Math.floor(rect.top) <= this.border) {
				currentTarget = target;
			}
		}

		if (currentTarget) {
			history.replaceState(null, null, `#${currentTarget.id}`);
		} else {
			history.replaceState(null, null, location.href.replace(/#.*$/, ''));
		}

		this.hash = location.hash;
	},
	init() {
		this.hashes = Array.from(this.$root.querySelectorAll('.article-nav__item')).map((item) => item.hash);
	},
}));
