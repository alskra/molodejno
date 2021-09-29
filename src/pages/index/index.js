import Alpine from 'alpinejs';

import '../../js/base';
// import '../../components/header/header';
import '../../components/footer/footer';
import '../../components/app/app';

try {
	Alpine.start();
	document.body.prepend('LOAD');
} catch (e) {
	document.body.prepend(e);
}
