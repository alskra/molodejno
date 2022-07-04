import Alpine from 'alpinejs';
import './article-nav.scss';

Alpine.data('articleNav', () => ({
	hash: location.hash,
}));
