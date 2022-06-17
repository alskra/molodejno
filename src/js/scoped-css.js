const SCOPE_ATTR_NAME = 'data-scoped-css';
const SCOPE_ATTR_PREFIX = 'data-s';
const SCOPE_ATTR_PREFIX_REGEXP = new RegExp(`^${SCOPE_ATTR_PREFIX}-`);
const HOST_REGEXP = /^([a-z0-9]+(?:-[a-z0-9]+)*)(?:\s|$)/i;

function isHost(el) {
	return HOST_REGEXP.test(el.className);
}

function isScopeAttr(attrName) {
	return attrName !== SCOPE_ATTR_NAME && SCOPE_ATTR_PREFIX_REGEXP.test(attrName);
}

function getScopeEl(el) {
	while (!isHost(el) && el.parentElement) {
		el = el.parentElement;
	}

	return el;
}

function getScopeName(el) {
	let name = el.getAttribute(SCOPE_ATTR_NAME) || (el.className.match(HOST_REGEXP) || '');

	return (Array.isArray(name) ? name[1] : name).toLowerCase();
}

function getScope(el) {
	el = getScopeEl(el);

	return {
		el,
		name: getScopeName(el),
	};
}

function getScopesFromAttrs(el) {
	const scopes = [];

	el.getAttributeNames().forEach((attrName) => {
		if (isScopeAttr(attrName)) {
			scopes.push(attrName.replace(SCOPE_ATTR_PREFIX_REGEXP, ''));
		}
	});

	return scopes;
}

function setData(el, scope) {
	const oldScopeNames = getScopesFromAttrs(el);
	const parentScope = el.parentElement && el.parentElement.cssScopes && el.parentElement.cssScopes.at(-1);

	el.cssScopes = [];

	if (parentScope && parentScope.el !== scope.el) {
		el.cssScopes.push(parentScope);
	}

	el.cssScopes.push(scope);

	oldScopeNames.forEach((oldScopeName) => {
		if (!el.cssScopes.find(({name: scopeName}) => oldScopeName === scopeName)) {
			el.removeAttribute(`${SCOPE_ATTR_PREFIX}-${oldScopeName}`);
		}
	});

	el.cssScopes.forEach(({el: scopeEl, name: scopeName}) => {
		if (scopeName) {
			if (scopeEl.hasAttribute(SCOPE_ATTR_NAME)) {
				if (!oldScopeNames.includes(scopeName)) {
					el.setAttribute(`${SCOPE_ATTR_PREFIX}-${scopeName}`, '');
				}
			} else {
				el.removeAttribute(`${SCOPE_ATTR_PREFIX}-${scopeName}`);
			}
		}
	});
}

function setScope(el, scope = getScope(el)) {
	setData(el, scope);

	Array.from(el.children).forEach((childEl) => {
		if (isHost(childEl)) {
			setScope(childEl);
		} else {
			setScope(childEl, scope);
		}
	});
}

export default function scopedCss(context = document.documentElement) {
	setScope(context);

	const observer = new MutationObserver((records) => {
		records.forEach(({type, target, addedNodes, attributeName, oldValue}) => {
			if (addedNodes.length) {
				addedNodes.forEach((node) => {
					if (node instanceof Element) {
						setScope(target);
					}
				});
			}

			if (type === 'attributes' && target.getAttribute(attributeName) !== oldValue) {
				setScope(target);
			}
		});
	});

	observer.observe(context, {
		subtree: true,
		childList: true,
		attributeFilter: ['class', SCOPE_ATTR_NAME],
	});

	return context;
}
