import Alpine from 'alpinejs';
import ResizeObserver from 'resize-observer-polyfill';
import './marquee.scss';

let itemHoverEl;
let itemHoverRect;
let tooltipCoords = {
	prevX: 0,
	prevY: 0,
	x: 0,
	y: 0,
};
let tooltipTimerId;
let tooltipEl;
let tooltipRect;
let tooltipFrameId;

Alpine.data('marquee', ({speed = 2} = {}) => ({
	listCount: 1,
	pos: 0,
	maxPos: 0,
	init() {
		if (this.$store.isDesktop) {
			this.$nextTick(() => this.initMarquee());
		}

		this.$watch('$store.isDesktop', (val) => {
			if (val) {
				if (this.$el.closest('html')) {
					this.$nextTick(() => this.initMarquee());
				}
			} else {
				this.destroyMarquee();
			}
		});
	},
	destroy() {
		this.destroyMarquee();
	},
	async initMarquee() {
		this.firstListEl = this.$el.querySelector('.marquee__list');
		this.resizeObserver = new ResizeObserver(() => this.updateMarquee());
		this.resizeObserver.observe(this.firstListEl);
		await this.updateLayout();
		this.play();
	},
	async updateMarquee() {
		await this.updateLayout();
	},
	destroyMarquee() {
		this.listCount = 1;
		this.resizeObserver.disconnect();
		setTimeout(() => this.reset());
	},
	updateLayout() {
		return new Promise((resolve) => {
			this.maxPos = this.firstListEl.offsetWidth;
			this.listCount = Math.ceil(this.$refs.container.offsetWidth / this.maxPos) + 1;
			this.$nextTick(() => {
				this.updatePos();
				resolve();
			});
		});
	},
	updatePos() {
		if (this.pos >= this.maxPos) {
			this.pos = 0;
		}

		this.$refs.container.style.transform = `translateX(${speed > 0 ? -this.pos : -this.maxPos + this.pos}px)`;
	},
	play() {
		cancelAnimationFrame(this.frameId);
		this.pos += Math.abs(speed);
		this.updatePos();
		this.frameId = requestAnimationFrame(() => this.play());
	},
	pause() {
		cancelAnimationFrame(this.frameId);
	},
	reset() {
		cancelAnimationFrame(this.frameId);
		this.pos = 0;
		this.$refs.container.style.transform = '';
	},
	showTooltip(evt) {
		itemHoverEl = evt.currentTarget;
		itemHoverRect = itemHoverEl.getBoundingClientRect();
		itemHoverEl.addEventListener('mousemove', this.posTooltip);

		tooltipTimerId = setTimeout(() => {
			tooltipEl = itemHoverEl.querySelector('.marquee__tooltip');
			document.body.append(tooltipEl);
			tooltipEl.classList.remove('is-hidden');
			tooltipRect = tooltipEl.getBoundingClientRect();
			tooltipCoords.prevX = tooltipCoords.prevX || scrollX + itemHoverRect.left + itemHoverRect.width / 2;
			tooltipCoords.prevY = tooltipCoords.prevY || scrollY + itemHoverRect.top;
			this.updateTooltipPos();
		}, 100);
	},
	updateTooltipPos() {
		const deltaX = tooltipCoords.x - tooltipCoords.prevX;
		const deltaY = tooltipCoords.y - tooltipCoords.prevY;

		if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
			tooltipCoords.prevX += deltaX * 0.1;
			tooltipCoords.prevY += deltaY * 0.1;
		} else {
			tooltipCoords.prevX = tooltipCoords.x;
			tooltipCoords.prevY = tooltipCoords.y;
		}

		tooltipEl.style.transform = `translate(
			${tooltipCoords.prevX - tooltipRect.width / 2}px,
			${tooltipCoords.prevY - tooltipRect.height}px
		)`;

		tooltipFrameId = requestAnimationFrame(() => this.updateTooltipPos());
	},
	posTooltip(evt) {
		tooltipCoords.x = scrollX + evt.clientX;
		tooltipCoords.y = scrollY + itemHoverRect.top;
	},
	hideTooltip(evt) {
		clearTimeout(tooltipTimerId);
		cancelAnimationFrame(tooltipFrameId);
		itemHoverEl.removeEventListener('mousemove', this.posTooltip);

		if (tooltipEl) {
			tooltipEl.classList.add('is-hidden');
			evt.currentTarget.append(tooltipEl);
			tooltipEl = null;
		}
	},
}));
