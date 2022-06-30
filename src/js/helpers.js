export function testPseudoClass(pseudoClass) {
	try {
		document.documentElement.matches(pseudoClass);

		return true;
	} catch {
		return false;
	}
}
