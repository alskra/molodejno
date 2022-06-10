const ATTR_PREFIX = 'css';
const HOST_REG = /^([a-zA-Z0-9-]+)(\s|$)/i;

function isHost(el) {
	return HOST_REG.test(el.className) || HOST_REG.test(el.dataset.cssScope);
}

function getScope(el) {
	while (!isHost(el) && el.parentEl) {
		el = el.parentEl;
	}

	const match = el.className.match(HOST_REG) || el.dataset.cssScope && el.dataset.cssScope.match(HOST_REG);

	return match && match[1];
}

function clearAttributes(target) {
	Array.from(target.attributes).forEach((attr) => {
		if (new RegExp(`data-${ATTR_PREFIX}-`, 'i').test(attr.name)) {
			target.removeAttribute(attr.name);
		}
	});
}

function setAttributes(target, scopeKey, scopeValue, scopeList = []) {
	if (!target.cssScope && !target.cssParentScope) {
		clearAttributes(target);
	}

	if (target[scopeKey] !== scopeValue) {
		if (target[scopeKey] && (scopeKey === 'cssParentScope' || target.cssScope !== target.cssParentScope)) {
			target.removeAttribute(`data-${ATTR_PREFIX}-${target[scopeKey]}`);
		}

		if (scopeValue && (!scopeList.length || scopeList.includes(scopeValue))) {
			target[scopeKey] = scopeValue;
			target.setAttribute(`data-${ATTR_PREFIX}-${target[scopeKey]}`, '');
		} else {
			delete target[scopeKey];
		}
	}
}

function setScope(el, scopeList, scope = getScope(el)) {
	const parentEl = el.parentElement;

	if (parentEl && parentEl.cssScope && parentEl.cssScope !== scope) {
		setAttributes(el, 'cssParentScope', parentEl.cssScope, scopeList);
	}

	setAttributes(el, 'cssScope', scope, scopeList);

	Array.from(el.children).forEach((childEl) => {
		if (isHost(childEl)) {
			setScope(childEl, scopeList);
		} else {
			setScope(childEl, scopeList, scope);
		}
	});
}

export default function cssScope({context = document.documentElement, scopeList} = {}) {
	setScope(context, scopeList);

	const observer = new MutationObserver((mutationList) => {
		mutationList.forEach((mutation) => {
			setScope(mutation.target, scopeList);
		});
	});

	observer.observe(context, {
		subtree: true,
		childList: true,
		attributeFilter: ['class'],
	});
}
