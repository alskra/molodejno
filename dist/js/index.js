(self.webpackChunk=self.webpackChunk||[]).push([[826],{4436:function(){var t=function(){return document.documentElement.style.setProperty("--vh","".concat(innerHeight/100,"px"))};t(),window.addEventListener("resize",t)},1986:function(t,e,r){"use strict";var n=r(9407),o=(r(483),r(4436),r(3214),r(5180)),i=r(8640),s=r(8638),C=r(4031),u=r(4420),a=r(8459);r(5849),r(5769),r(3238),r(4078),r(2077),r(911),r(2482),r(3352);var l=r(5630),c={};l.keys().forEach((function(t){var e=t.split("/").pop().replace(/\.\w+$/,"");c[e]=l(t).default||l(t)}));var f=function(t){(0,s.Z)(a,t);var e,r,n=(e=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=(0,u.Z)(e);if(r){var o=(0,u.Z)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,C.Z)(this,t)});function a(){var t;return(0,o.Z)(this,a),(t=n.call(this)).attachShadow({mode:"open"}),t}return(0,i.Z)(a,[{key:"name",get:function(){return this.getAttribute("name")}},{key:"update",value:function(){this.shadowRoot.innerHTML=c[this.name]}},{key:"attributeChangedCallback",value:function(t){"name"===t&&this.update()}}],[{key:"observedAttributes",get:function(){return["name"]}}]),a}((0,a.Z)(HTMLElement));customElements.define("icon-svg",f),window.Alpine=n.Z,n.Z.store("isDesktop",innerWidth>=1025),window.addEventListener("resize",(function(){n.Z.store("isDesktop",innerWidth>=1025)}));var d=r(722);n.Z.data("header",(function(){return{isSticky:!1,mobMenuIsOpen:!1,init:function(){var t=this;this.updateStick(),this.$watch("mobMenuIsOpen",(function(e){e?(0,d.Qp)(t.$el,{reserveScrollBarGap:!0}):(0,d.tG)(t.$el)}))},updateStick:function(){this.$store.isDesktop?this.isSticky=scrollY>90/140*this.$el.offsetHeight:this.isSticky=!1},updateMobMenu:function(){this.$store.isDesktop&&(this.mobMenuIsOpen=!1)},toggleMobMenu:function(){this.mobMenuIsOpen=!this.mobMenuIsOpen}}})),r(140);var p=r(4205),h=r(7803),v=r(7296),w=r(820);p.Z.use([h.Z,v.Z,w.Z]),n.Z.data("slider",(function(){return{init:function(){this.swiper=new p.Z(this.$refs.container,{effect:"fade",fadeEffect:{crossFade:!1},navigation:{prevEl:this.$refs.buttonPrev,nextEl:this.$refs.buttonNext},autoplay:!0,loop:!0})}}})),n.Z.start()},2450:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><marker id="id-1a" markerHeight="27" markerWidth="17" orient="auto" refX="1" refY="13.5"><path stroke="currentColor" d="M15.7207 1L1 13.6848M15.7207 26L1 13.3152"/></marker></defs><line x1="0" x2="100%" y1="13.5" y2="13.5" stroke="currentColor" stroke-width="1" marker-start="url(#id-1a)"/></svg>'},8744:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><marker id="id-1a" markerHeight="27" markerWidth="17" orient="auto" refX="16" refY="13.5"><path stroke="currentColor" d="M1.2793 1L16 13.6848M1.2793 26L16 13.3152"/></marker></defs><line x1="0" x2="100%" y1="13.5" y2="13.5" stroke="currentColor" stroke-width="1" marker-end="url(#id-1a)"/></svg>'},920:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 15"><path fill="currentColor" d="M0 4.96006H1.71464V4.25633V3.56781V3.45246C1.71464 2.78897 1.7344 1.76334 2.26708 1.12846C2.8294 0.456036 3.60025 0 4.92749 0C7.08981 0 8 0.278987 8 0.278987L7.57109 2.57615C7.57109 2.57615 6.85658 2.39016 6.1895 2.39016C5.52341 2.39016 4.92749 2.60566 4.92749 3.20924V3.45335V4.25723V4.96095H7.66103L7.47029 7.20447H4.92749V15H1.71464V7.20358H0V4.96006Z"/></svg>'},3279:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M11.6689 0H4.33105C1.94287 0 0 1.94287 0 4.33105V11.6691C0 14.0571 1.94287 16 4.33105 16H11.6691C14.0571 16 16 14.0571 16 11.6691V4.33105C16 1.94287 14.0571 0 11.6689 0V0ZM8 12.3749C5.58765 12.3749 3.62512 10.4124 3.62512 8C3.62512 5.58765 5.58765 3.62512 8 3.62512C10.4124 3.62512 12.3749 5.58765 12.3749 8C12.3749 10.4124 10.4124 12.3749 8 12.3749ZM12.4795 4.65686C11.7666 4.65686 11.1868 4.07703 11.1868 3.36414C11.1868 2.65125 11.7666 2.07129 12.4795 2.07129C13.1924 2.07129 13.7723 2.65125 13.7723 3.36414C13.7723 4.07703 13.1924 4.65686 12.4795 4.65686Z"/><path fill="currentColor" d="M7.99939 4.56299C6.10437 4.56299 4.5625 6.10474 4.5625 7.99988C4.5625 9.8949 6.10437 11.4368 7.99939 11.4368C9.89453 11.4368 11.4363 9.8949 11.4363 7.99988C11.4363 6.10474 9.89453 4.56299 7.99939 4.56299Z"/><path fill="currentColor" d="M12.4797 3.00977C12.2842 3.00977 12.125 3.16895 12.125 3.3645C12.125 3.56006 12.2842 3.71924 12.4797 3.71924C12.6754 3.71924 12.8346 3.56018 12.8346 3.3645C12.8346 3.16882 12.6754 3.00977 12.4797 3.00977Z"/></svg>'},3254:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 35"><path fill="url(#id-2a)" d="M0.00195312 0L17.5841 17.4178L35.0019 35L0.00195618 35L0.00195312 0Z"/><path fill="url(#id-3b)" d="M35 0L17.4178 17.4178L4.5696e-06 35L35 35L35 0Z"/><defs><linearGradient id="id-2a" x1="10.0777" x2="26.5171" y1="6.62879" y2="33.6742" gradientUnits="userSpaceOnUse"><stop stop-color="#373CB2"/><stop offset="1" stop-color="#646AF4"/></linearGradient><linearGradient id="id-3b" x1="17.5" x2="17.5" y1="-1.5299e-06" y2="35" gradientUnits="userSpaceOnUse"><stop offset="0.228529" stop-color="#4147D2"/><stop offset="1" stop-color="#7277F5"/></linearGradient></defs></svg>'},6675:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 30"><path fill="currentColor" d="M48.5464 21.8663C48.3177 21.761 47.8955 21.6557 47.5144 22.0067C46.066 23.3583 42.5419 25.8684 37.5401 26.0381C26.6863 26.3891 16.7883 18.7536 16.2371 17.9345C21.0336 16.9574 23.297 14.5058 23.901 11.5042C24.5577 8.25108 23.1504 5.07985 20.5528 3.26605C19.3214 2.41181 16.3602 0.358102 10.0449 0.0187448C7.99847 -0.0865728 5.03727 0.258642 3.64755 0.884697C0.26416 2.4118 -0.539172 5.29635 0.316938 7.54897C0.750857 8.68991 1.81806 9.30427 2.73867 9.30427C3.47164 9.30427 3.57132 8.86544 3.57132 8.86544C2.62139 8.40322 1.55419 7.67769 1.84738 6.20909C2.25198 4.13785 6.22762 3.73412 9.1595 3.73412C12.5605 3.73412 15.4982 4.26656 17.8789 5.60059C19.7319 6.64206 20.975 7.7713 21.274 9.5149C22.1301 14.4531 17.1987 16.4893 15.4103 16.5361C15.4103 16.5361 18.0548 10.7377 17.8613 8.53777C17.7675 7.44364 16.5478 6.85271 15.205 6.85271C14.7183 10.1117 11.8041 18.8882 8.53207 23.6567C8.53207 23.6567 8.97772 24.3179 10.3205 23.9142C12.5957 23.2355 14.4721 18.5956 14.4721 18.5956C20.4179 24.4466 29.0201 28.7061 31.8992 29.4082C34.3268 30.005 38.0561 30.3737 40.8062 29.3965C44.8464 27.963 48.4291 24.0136 48.9627 22.6328C49.1269 22.1823 48.7047 21.9424 48.5464 21.8663Z"/></svg>'},6233:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 42 21"><path fill="currentColor" fill-rule="evenodd" d="M31.2648 14.488C33.5109 14.488 35.3318 12.6672 35.3318 10.4211C35.3318 8.17493 33.5109 6.35409 31.2648 6.35409C29.0187 6.35409 27.1978 8.17493 27.1978 10.4211C27.1978 12.6672 29.0187 14.488 31.2648 14.488ZM31.2648 20.8421C37.0202 20.8421 41.6859 16.1764 41.6859 10.4211C41.6859 4.66566 37.0202 0 31.2648 0C25.5094 0 20.8438 4.66566 20.8438 10.4211C20.8438 16.1764 25.5094 20.8421 31.2648 20.8421Z" clip-rule="evenodd"/><circle cx="10.4211" cy="10.4211" r="10.4211" fill="currentColor"/></svg>'},1102:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 10"><path fill="currentColor" d="M17.4296 9.02886C17.4079 8.98241 17.3893 8.94525 17.3697 8.91532C17.0652 8.36826 16.4841 7.6963 15.6273 6.89945L15.6088 6.87984L15.5995 6.87158L15.5902 6.86229H15.5819C15.1918 6.4907 14.9451 6.24195 14.8419 6.11395C14.653 5.87139 14.6096 5.62366 14.7139 5.37491C14.7861 5.18602 15.0607 4.78862 15.5355 4.17963C15.7853 3.85759 15.9835 3.59954 16.129 3.40446C17.1808 2.00584 17.637 1.11093 17.4966 0.721797L17.443 0.630964C17.4068 0.576258 17.3119 0.525681 17.1602 0.480265C17.0084 0.434848 16.8133 0.426591 16.577 0.457556L13.949 0.476136C13.9067 0.461685 13.8448 0.461685 13.7673 0.480265C13.6879 0.498844 13.6486 0.508134 13.6486 0.508134L13.6022 0.530842L13.5661 0.558711C13.5361 0.576258 13.5021 0.608256 13.4659 0.653672C13.4298 0.699089 13.3989 0.752763 13.3751 0.813662C13.0892 1.54961 12.763 2.23395 12.3987 2.86565C12.1726 3.24344 11.9662 3.57064 11.7773 3.84623C11.5884 4.12389 11.4305 4.32723 11.3025 4.45832C11.1755 4.58838 11.0599 4.69469 10.9567 4.77211C10.8524 4.85159 10.774 4.88462 10.7193 4.87326C10.6656 4.86088 10.613 4.84849 10.5655 4.8361C10.4798 4.7814 10.4117 4.70708 10.3601 4.61315C10.3074 4.51922 10.2734 4.40052 10.2548 4.25705C10.2362 4.11357 10.2259 3.99074 10.2228 3.88752C10.2207 3.7843 10.2218 3.63773 10.228 3.44987C10.2331 3.26098 10.2373 3.13299 10.2373 3.06693C10.2373 2.83572 10.2414 2.5849 10.2507 2.31447C10.26 2.04403 10.2682 1.82934 10.2734 1.67141C10.2785 1.51349 10.2827 1.34627 10.2827 1.16977C10.2827 0.994295 10.2713 0.855981 10.2507 0.754827C10.23 0.654705 10.197 0.557679 10.1547 0.462717C10.1113 0.368788 10.0484 0.295503 9.96579 0.243893C9.88425 0.192284 9.78309 0.150996 9.66129 0.12003C9.33822 0.0467447 8.92844 0.00752175 8.42989 0.00132861C7.29758 -0.0110577 6.57092 0.0632599 6.24888 0.220153C6.12192 0.288277 6.00528 0.37911 5.90206 0.494715C5.79368 0.6289 5.7782 0.702185 5.85664 0.713539C6.22204 0.768245 6.48009 0.899334 6.63285 1.10577L6.68756 1.21518C6.72988 1.29363 6.77323 1.43401 6.81451 1.63425C6.85787 1.83553 6.8847 2.05745 6.89709 2.30105C6.92702 2.74489 6.92702 3.12473 6.89709 3.44162C6.86716 3.75747 6.83826 4.00416 6.81039 4.17963C6.78355 4.35614 6.74226 4.49961 6.68756 4.60902C6.63285 4.71843 6.59569 4.78553 6.57814 4.8103C6.55956 4.83404 6.54408 4.84952 6.53273 4.85572C6.45325 4.88668 6.37067 4.90113 6.28603 4.90113C6.20139 4.90113 6.09818 4.85881 5.97638 4.77314C5.85458 4.68747 5.72762 4.57083 5.59756 4.4222C5.46648 4.27356 5.31887 4.06506 5.15475 3.79669C4.9896 3.52935 4.82032 3.2135 4.64382 2.84811L4.49725 2.58387C4.40642 2.41356 4.28152 2.16583 4.1236 1.83966C3.96567 1.51452 3.82529 1.1997 3.7035 0.895205C3.65601 0.768245 3.58273 0.67122 3.48467 0.604127L3.44029 0.576258C3.40829 0.552518 3.35978 0.526713 3.29372 0.498844C3.22662 0.472007 3.15747 0.451363 3.08315 0.440009L0.584219 0.457556C0.328236 0.457556 0.154828 0.515359 0.0639958 0.629932L0.026837 0.68567C0.00928973 0.716636 0 0.765149 0 0.832241C0 0.899333 0.0185795 0.981909 0.0547061 1.07893C0.420101 1.93668 0.816462 2.76347 1.24482 3.56032C1.67421 4.35717 2.0458 4.99919 2.36165 5.48535C2.67853 5.97254 3.00057 6.43084 3.32881 6.86229C3.65808 7.29375 3.87484 7.5714 3.98115 7.6932C4.0885 7.81603 4.17211 7.90584 4.23301 7.96777L4.46009 8.18556C4.60666 8.33316 4.82136 8.5076 5.10418 8.71094C5.387 8.91428 5.70078 9.11556 6.04347 9.31271C6.38719 9.50986 6.78768 9.67191 7.24391 9.79681C7.70013 9.9217 8.14501 9.97228 8.57646 9.94647H9.6262C9.83986 9.92996 9.99985 9.86183 10.1103 9.74726L10.1454 9.70288C10.1691 9.66469 10.1929 9.60998 10.2135 9.5336C10.2342 9.45722 10.2455 9.37464 10.2455 9.28174C10.2393 9.02163 10.2589 8.78629 10.3054 8.57573C10.3508 8.36619 10.4024 8.20827 10.4592 8.10092C10.518 7.9946 10.582 7.9048 10.6563 7.83152C10.7275 7.75926 10.7802 7.71488 10.8101 7.69836C10.8401 7.68391 10.8648 7.67462 10.8824 7.6674C11.0289 7.61889 11.2003 7.66637 11.3985 7.80984C11.5956 7.95331 11.7804 8.12879 11.9548 8.33935C12.1282 8.54889 12.3367 8.78526 12.5783 9.0464C12.8229 9.30858 13.0345 9.5016 13.2172 9.63062L13.3999 9.739C13.5217 9.81126 13.6796 9.87835 13.8747 9.94028C14.0687 10.0012 14.2401 10.0146 14.3846 9.98466L16.7204 9.94854C16.9527 9.94854 17.1312 9.91035 17.2592 9.83397C17.3872 9.75758 17.4615 9.67501 17.4874 9.58418C17.5111 9.49334 17.5121 9.39012 17.4915 9.27349C17.4719 9.15582 17.4502 9.07531 17.4296 9.02886Z"/></svg>'},5630:function(t,e,r){var n={"./arrow-left.svg":2450,"./arrow-right.svg":8744,"./facebook.svg":920,"./instagram.svg":3279,"./logo-sticky.svg":3254,"./renaissance.svg":6675,"./visually.svg":6233,"./vk.svg":1102};function o(t){var e=i(t);return r(e)}function i(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id=5630}},function(t){"use strict";t.O(0,[216],(function(){return 1986,t(t.s=1986)})),t.O()}]);