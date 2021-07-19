import Alpine from 'alpinejs';
import ResizeObserver from 'resize-observer-polyfill';
import './marquee.scss';

Alpine.data('marquee', ({speed = 2} = {}) => ({
	listCount: 1,
	pos: 0,
	init() {
		const resizeObserver = new ResizeObserver(() => this.update());

		this.$nextTick(() => {
			this.listEl = this.$el.querySelector('.marquee__list');
			resizeObserver.observe(this.$refs.container);
			resizeObserver.observe(this.listEl);
		});

		this.posTooltipBind = this.posTooltip.bind(this);
	},
	update() {
		const listWidth = this.listEl.offsetWidth;

		this.maxPos = listWidth;
		this.listCount = Math.ceil(this.$refs.container.offsetWidth / listWidth) + 1;

		// this.play();
	},
	updatePosition() {
		if (this.pos >= this.maxPos) {
			this.pos = 0;
		}

		this.$refs.container.style.transform = `translateX(${speed > 0 ? -this.pos : -this.maxPos + this.pos}px)`;
	},
	play() {
		this.pos += Math.abs(speed);
		this.updatePosition();
		cancelAnimationFrame(this.frameId);
		this.frameId = requestAnimationFrame(() => this.play());
	},
	stop() {
		cancelAnimationFrame(this.frameId);
	},
	showTooltip(evt) {
		this.itemEl = evt.currentTarget;

		this.tooltipTimer = setTimeout(() => {
			this.itemRect = this.itemEl.getBoundingClientRect();
			this.tooltipEl = this.itemEl.querySelector('.marquee__tooltip');
			this.tooltipRect = this.tooltipEl.getBoundingClientRect();
			document.body.append(this.tooltipEl);
			this.tooltipEl.classList.remove('is-hidden');
			this.itemEl.addEventListener('mousemove', this.posTooltipBind);
		}, 150);
	},
	posTooltip(evt) {
		this.tooltipEl.style.transform = `translate(
			${scrollX + evt.clientX - this.tooltipRect.width / 2}px,
			${scrollY + this.itemRect.top - this.tooltipRect.height}px
		)`;
	},
	hideTooltip(evt) {
		clearTimeout(this.tooltipTimer);

		if (this.tooltipEl) {
			this.tooltipEl.classList.add('is-hidden');
			this.itemEl.removeEventListener('mousemove', this.posTooltipBind);
			evt.currentTarget.append(this.tooltipEl);
			this.tooltipEl = null;
		}
	},
}));
