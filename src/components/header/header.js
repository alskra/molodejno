import '../soc-network/soc-network';
import '../nav/nav';
import './header.scss';

export default () => ({
	isSticky: false,
	mobMenuIsOpen: false,
	init() {
		this.updateStick();
	},
	updateStick() {
		if (this.$store.isDesktop) {
			this.isSticky = scrollY >= this.$el.offsetHeight;
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
});
