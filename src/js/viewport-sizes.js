import ResizeObserver from 'resize-observer-polyfill';

const el = document.documentElement;
const style = el.style;

const setSizes = () => {
	style.setProperty('--vw', `${el.clientWidth / 100}px`);
	style.setProperty('--vh', `${el.clientHeight / 100}px`);
};

setSizes();
window.addEventListener('resize', setSizes);

const resizeObserver = new ResizeObserver(setSizes);

resizeObserver.observe(el);
