import Alpine from 'alpinejs';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import '../soc-network/soc-network';
import '../nav/nav';
import './header.scss';

Alpine.data('header', () => ({
	isSticky: false,
	mobMenuIsOpen: false,
	init() {
		this.updateStick();
		this.$watch('mobMenuIsOpen', (val) => {
			if (val) {
				disableBodyScroll(this.$el, {
					reserveScrollBarGap: true,
				});
			} else {
				enableBodyScroll(this.$el);
			}
		});
	},
	updateStick() {
		if (this.$store.isDesktop) {
			this.isSticky = scrollY > 90 / 140 * this.$el.offsetHeight;
		} else {
			this.isSticky = false;
		}
	},
	updateMobMenu() {
		if (this.$store.isDesktop) {
			this.mobMenuIsOpen = false;
		}
	},
	toggleMobMenu() {
		this.mobMenuIsOpen = !this.mobMenuIsOpen;
	},
}));
