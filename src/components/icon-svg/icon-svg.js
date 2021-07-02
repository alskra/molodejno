import './icon-svg.scss';

const requireIcon = require.context(
	'../../images/icons/svg?raw',
	false,
	/\.svg$/,
);

const icons = {};

requireIcon.keys().forEach((iconPath) => {
	const iconName = iconPath
		.split('/')
		.pop()
		.replace(/\.\w+$/, '');

	icons[iconName] = requireIcon(iconPath).default || requireIcon(iconPath);
});

class IconSvg extends HTMLElement {
	static get observedAttributes() {
		return ['name'];
	}

	get name() {
		return this.getAttribute('name');
	}

	constructor() {
		super();

		this.attachShadow({mode: 'open'});
	}

	update() {
		this.shadowRoot.innerHTML = icons[this.name];
	}

	attributeChangedCallback(name) {
		if (name === 'name') {
			this.update();
		}
	}
}

customElements.define('icon-svg', IconSvg);

export default IconSvg;
export {icons};
