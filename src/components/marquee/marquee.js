import Alpine from 'alpinejs';
import ResizeObserver from 'resize-observer-polyfill';
import './marquee.scss';

Alpine.data('marquee', ({speed = 2, startPos = 0} = {}) => ({
	listCount: 1,
	played: true,
	init() {
		this.speed = speed;
		this.pos = startPos;

		const resizeObserver = new ResizeObserver(() => this.update());

		this.$nextTick(() => {
			this.listEl = this.$el.querySelector('.marquee__list');
			resizeObserver.observe(this.$refs.container);
			resizeObserver.observe(this.listEl);
		});
	},
	update() {
		const listWidth = this.listEl.offsetWidth;

		this.maxPos = listWidth;
		this.listCount = Math.ceil(this.$refs.container.offsetWidth / listWidth) + 1;

		if (this.pos >= this.maxPos) {
			this.pos = 0;
		}

		this.updatePosition();

		if (this.played) {
			this.play();
		}
	},
	updatePosition() {
		this.$refs.container.style.transform = `translateX(${-this.pos}px)`;
	},
	play() {
		this.pos += speed;

		if (this.pos >= this.maxPos) {
			this.pos = 0;
		}

		this.updatePosition();
		cancelAnimationFrame(this.frameId);
		this.frameId = requestAnimationFrame(() => this.play());
	},
}));
