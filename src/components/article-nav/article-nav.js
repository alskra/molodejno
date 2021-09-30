import Alpine from 'alpinejs';
import './article-nav.scss';

Alpine.data('articleNav', () => ({
	hash: location.hash,
	update() {
		let sections = Array.from(document.querySelectorAll('[id]'));
		let ids = Array.from(this.$root.querySelectorAll('.article-nav__item')).map((item) => item.hash);

		sections = sections.filter((item) => ids.includes(`#${item.id}`));

		let currentSection;

		for (let i = 0; i < sections.length; i++) {
			const rect = sections[i].getBoundingClientRect();

			if (rect.top <= innerHeight / 2) {
				currentSection = sections[i];
			}
		}

		if (currentSection) {
			history.pushState(null, null, `#${currentSection.id}`);
			window.dispatchEvent(new Event('popstate'));
		}
	},
}));
