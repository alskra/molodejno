import Alpine from 'alpinejs';
import './article-nav.scss';

Alpine.data('articleNav', () => ({
	hash: location.hash,
	update() {
		let sections = Array.from(document.querySelectorAll('[id]'));
		let ids = Array.from(this.$root.querySelectorAll('.article-nav__item')).map((item) => item.hash);

		sections = sections.filter((item) => ids.includes(`#${item.id}`));

		const border = 0;
		let currentSection;

		for (let i = 0; i < sections.length; i++) {
			const rect = sections[i].getBoundingClientRect();

			if (Math.floor(rect.top) <= border) {
				currentSection = sections[i];
			}
		}

		if (currentSection) {
			history.replaceState(null, null, `#${currentSection.id}`);
			this.hash = location.hash;
		}
	},
}));
