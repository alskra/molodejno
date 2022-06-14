const SCOPE_ATTR_NAME = 'data-scoped-css';
const SCOPE_ATTR_PREFIX = 'data-s';
const HOST_REG = /^([a-zA-Z0-9-]+)(\s|$)/i;

function isHost(el) {
	return HOST_REG.test(el.className);
}

function isScopeAttr(attrName) {
	return attrName !== SCOPE_ATTR_NAME && new RegExp(`${SCOPE_ATTR_PREFIX}-`, 'i').test(attrName);
}

function getScopeEl(el) {
	while (!isHost(el) && el.parentElement) {
		el = el.parentElement;
	}

	return el;
}

function getScopeName(el) {
	let name = el.getAttribute(SCOPE_ATTR_NAME) || el.className.match(HOST_REG);

	return Array.isArray(name) ? name[1] : name || '';
}

function getScope(el) {
	el = getScopeEl(el);

	return {
		el,
		name: getScopeName(el),
	};
}

function getScopeAttrs(el) {
	return el.getAttributeNames().filter((attrName) => isScopeAttr(attrName));
}

function setData(el, scope) {
	const parentScope = el.parentElement && el.parentElement.cssScope && el.parentElement.cssScope.at(-1);
	const scopeAttrs = getScopeAttrs(el);

	el.cssScope = [];

	if (parentScope && parentScope.el !== scope.el) {
		el.cssScope.push(parentScope);
	}

	el.cssScope.push(scope);

	scopeAttrs.forEach((attrName) => {
		if (!el.cssScope.find(({name: scopeName}) => attrName.replace(`${SCOPE_ATTR_PREFIX}-`, '') === scopeName)) {
			el.removeAttribute(attrName);
		}
	});

	el.cssScope.forEach(({el: scopeEl, name: scopeName}) => {
		if (scopeName) {
			if (scopeEl.hasAttribute(SCOPE_ATTR_NAME)) {
				el.setAttribute(`${SCOPE_ATTR_PREFIX}-${scopeName}`, '');
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

export default async function scopedCss(context = document.documentElement) {
	setScope(context);

	const observer = new MutationObserver((mutationList) => {
		mutationList.forEach((mutation) => {
			setScope(mutation.target);
		});
	});

	observer.observe(context, {
		subtree: true,
		childList: true,
		attributeFilter: ['class', SCOPE_ATTR_NAME],
	});
}
