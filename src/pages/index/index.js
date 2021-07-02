import Alpine from 'alpinejs';
import '../../js/base';
import header from '../../components/header/header';
import '../../components/footer/footer';
import '../../components/app/app';

Alpine.data('header', header);
Alpine.start();
