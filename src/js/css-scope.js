const ATTR_PREFIX = 'css';
const HOST_REG = /^([a-zA-Z0-9-]+)(\s|$)/i;

function isHost(el) {
	return HOST_REG.test(el.className);
}

function getHost(el) {
	while (!isHost(el) && el.parentElement) {
		el = el.parentElement;
	}

	return el;
}

function getScope(el) {
	el = getHost(el);

	let name = el.dataset.cssScope ? el.dataset.cssScope.match(HOST_REG) : el.className.match(HOST_REG);

	name = name ? name[1] : '';

	return {
		el,
		name,
	};
}

function clearAttributes(el) {
	Array.from(el.attributes).forEach((attr) => {
		if (attr.name !== 'data-css-scope' && new RegExp(`data-${ATTR_PREFIX}-`, 'i').test(attr.name)) {
			el.removeAttribute(attr.name);
		}
	});
}

function setAttributes(el, key, scope) {
	if (!el.cssScope && !el.cssParentScope) {
		clearAttributes(el);
	}

	if (el[key] !== scope.name) {
		if (el[key] && (key === 'cssParentScope' || el.cssScope !== el.cssParentScope)) {
			el.removeAttribute(`data-${ATTR_PREFIX}-${el[key]}`);
		}

		if (scope.name && scope.el.hasAttribute('data-css-scope')) {
			el[key] = scope.name;
			el.setAttribute(`data-${ATTR_PREFIX}-${el[key]}`, '');
		} else {
			delete el[key];
		}
	}
}

function setScope(el, scope = getScope(el)) {
	const parentEl = el.parentElement;

	if (parentEl && parentEl.cssScope && parentEl.cssScope !== scope.name) {
		setAttributes(el, 'cssParentScope', {
			...scope,
			name: parentEl.cssScope,
		});
	} else {
		setAttributes(el, 'cssParentScope', {
			...scope,
			name: '',
		});
	}

	setAttributes(el, 'cssScope', scope);

	Array.from(el.children).forEach((childEl) => {
		if (isHost(childEl)) {
			setScope(childEl);
		} else {
			setScope(childEl, scope);
		}
	});
}

export default function cssScope(context = document.documentElement) {
	setScope(context);

	const observer = new MutationObserver((mutationList) => {
		mutationList.forEach((mutation) => {
			setScope(mutation.target);
		});
	});

	observer.observe(context, {
		subtree: true,
		childList: true,
		attributeFilter: ['class', 'data-css-scope'],
	});
}
