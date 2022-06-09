function getScope(el) {
	let hostEl = el;
	let match = hostEl.className.match(/^([a-zA-Z0-9-]+)\s?/i);

	while (!match && hostEl.parentEl) {
		hostEl = hostEl.parentEl;
		match = hostEl.className.match(/^([a-zA-Z0-9-]+)\s?/i);
	}

	return match && match[1];
}

function setScope(el, scopeList = [], scope = getScope(el)) {
	const clearScopeAttributes = (target) => {
		if (!target.cssScope && !target.cssParentScope) {
			Array.from(target.attributes).forEach((attr) => {
				if (/data-scope-/i.test(attr.name)) {
					target.removeAttribute(attr.name);
				}
			});
		}
	};

	const setScopeAttributes = (target, scopeKey, scopeValue) => {
		if (target[scopeKey] !== scopeValue) {
			if (target[scopeKey] && (scopeKey === 'cssParentScope' || target.cssScope !== target.cssParentScope)) {
				target.removeAttribute(`data-scope-${target[scopeKey]}`);
			}

			if (scopeValue && (!scopeList.length || scopeList.includes(scopeValue))) {
				target[scopeKey] = scopeValue;
				target.setAttribute(`data-scope-${target[scopeKey]}`, '');
			} else {
				delete target[scopeKey];
			}
		}
	};

	clearScopeAttributes(el);

	const parentEl = el.parentElement;

	if (parentEl && parentEl.cssScope && parentEl.cssScope !== scope) {
		setScopeAttributes(el, 'cssParentScope', parentEl.cssScope);
	}

	setScopeAttributes(el, 'cssScope', scope);

	Array.from(el.children).forEach((childEl) => {
		if (!childEl.className.match(/^([a-zA-Z0-9-]+)\s?/i)) {
			setScope(childEl, scopeList, scope);
		} else {
			setScope(childEl, scopeList);
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
