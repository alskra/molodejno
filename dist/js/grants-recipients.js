(self.webpackChunk=self.webpackChunk||[]).push([[366],{7997:function(t,e,n){"use strict";var i=n(9407),r=n(2398);i.Z.data("filters",(function(){var t;return{swiperIsInit:!1,init:function(){t=this},destroy:function(){t.destroySwiper()},initSwiper:function(){var t=this;this.swiperIsInit||(this.swiper=new r.ZP(this.$refs.swiper,{modules:[r.Rv],slidesPerView:"auto",freeMode:{enabled:!0,momentum:!1,momentumBounce:!1},on:{init:function(){t.swiperIsInit=!0},destroy:function(){t.swiperIsInit=!1}}}),setTimeout((function(){t.swiper.destroyed||t.swiper.update()}),1e3))},destroySwiper:function(){this.swiperIsInit&&this.swiper.destroy()},effect:function(){var t=this;this.$store.isDesktop?this.destroySwiper():this.$nextTick((function(){return t.initSwiper()}))}}}))},601:function(t,e,n){"use strict";var i=n(9407),r=n(722);i.Z.data("header",(function(){return{isSticky:!1,mobMenuIsOpen:!1,init:function(){var t=this;this.updateStick(),this.$watch("mobMenuIsOpen",(function(e){e?(0,r.Qp)(t.$el,{reserveScrollBarGap:!0}):(0,r.tG)(t.$el)}))},updateStick:function(){this.$store.isDesktop?this.isSticky=scrollY>90/140*this.$el.offsetHeight:this.isSticky=!1},updateMobMenu:function(){this.$store.isDesktop&&(this.mobMenuIsOpen=!1)},toggleMobMenu:function(){this.mobMenuIsOpen=!this.mobMenuIsOpen}}}))},7012:function(t,e,n){"use strict";n(5849);var i=n(9407),r=n(9667),s=n(4271);r.p8.registerPlugin(s.i),i.Z.data("scoreAnimated",(function(){return{init:function(){r.p8.timeline({scrollTrigger:{trigger:this.$el,start:"top bottom-=120",end:"bottom top+=120",toggleActions:"play pause play pause"}}).from(this.$refs.number,{autoAlpha:0,duration:.2}).from(this.$refs.number,{textContent:0,duration:1.4,onUpdate:function(){this.targets().forEach((function(t){t.innerHTML=Math.ceil(t.textContent).toLocaleString("ru")}))}},"-=0.2").from(this.$refs.plus,{autoAlpha:0,duration:.2})}}}))},7797:function(t,e,n){"use strict";var i=n(1478),r=n.n(i),s=(n(7012),n(9407)),o=n(2398);s.Z.data("swiperCards",(function(){var t;return{swiperIsInit:!1,init:function(){t=this},destroy:function(){t.destroySwiper()},initSwiper:function(){var t=this;this.swiperIsInit||(this.swiper=new o.ZP(this.$refs.swiper,{slidesPerView:"auto",on:{init:function(){t.swiperIsInit=!0},destroy:function(){t.swiperIsInit=!1}}}))},destroySwiper:function(){this.swiperIsInit&&this.swiper.destroy()},effect:function(){var t=this;this.$store.isDesktop?this.destroySwiper():this.$nextTick((function(){return t.initSwiper()}))}}})),window.addEventListener("load",(function(){return new(r())(".section__rellax",{center:!0})}))},2327:function(t,e,n){"use strict";n(4379),n(483),n(4436);var i=n(7329),r=function(){return document.documentElement.style.setProperty("--scrollbar-width","".concat(innerWidth-document.body.clientWidth,"px"))};r(),new i.Z(r).observe(document.body);var s=n(5566),o=n.n(s),c=n(9407),u=(n(3214),n(2951)),a=n(1976),l=n(7591),f=n(82),p=n(7597),d=n(4138);n(5849),n(5769),n(3238),n(4078),n(2077),n(911),n(2482),n(3352),n(8410);var h=n(5630),w={};h.keys().forEach((function(t){var e=t.split("/").pop().replace(/\.\w+$/,"");w[e]=h(t).default||h(t)}));var v=function(t){(0,l.Z)(r,t);var e,n,i=(e=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=(0,p.Z)(e);if(n){var r=(0,p.Z)(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return(0,f.Z)(this,t)});function r(){var t;return(0,u.Z)(this,r),(t=i.call(this)).attachShadow({mode:"open"}),t}return(0,a.Z)(r,[{key:"name",get:function(){return this.getAttribute("name")}},{key:"update",value:function(){this.shadowRoot.innerHTML=w[this.name],Object.assign(this.shadowRoot.querySelector("svg").style,{display:"block",width:"100%",height:"100%"})}},{key:"attributeChangedCallback",value:function(t){"name"===t&&this.update()}}],[{key:"observedAttributes",get:function(){return["name"]}}]),r}((0,d.Z)(HTMLElement));customElements.define("icon-svg",v),window.Alpine=c.Z,c.Z.store("isDesktop",innerWidth>=1025),window.addEventListener("resize",(function(){c.Z.store("isDesktop",innerWidth>=1025)})),o().init()},4436:function(){var t=function(){return document.documentElement.style.setProperty("--vh","".concat(innerHeight/100,"px"))};t(),window.addEventListener("resize",t)},8423:function(t,e,n){"use strict";var i=n(9407);n(2327),n(601),n(7797),n(7997),i.Z.start()},5630:function(t,e,n){var i={"./arrow-left.svg":3773,"./arrow-right.svg":4863,"./facebook.svg":3784,"./instagram.svg":2611,"./logo-sticky.svg":8212,"./plus.svg":8161,"./renaissance.svg":9941,"./visually.svg":641,"./vk.svg":1168};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=s,t.exports=r,r.id=5630},3773:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg"><defs><marker id="id-1a" markerHeight="27" markerWidth="17" orient="0" refX="1" refY="13.5"><path stroke="currentColor" d="M15.72 1 1 13.685M15.72 26 1 13.315"/></marker></defs><line x1="0" x2="100%" y1="13.5" y2="13.5" stroke="currentColor" marker-start="url(#id-1a)"/></svg>'},4863:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg"><defs><marker id="id-1a" markerHeight="27" markerWidth="17" orient="0" refX="16" refY="13.5"><path stroke="currentColor" d="M1.28 1 16 13.685M1.28 26 16 13.315"/></marker></defs><line x1="0" x2="100%" y1="13.5" y2="13.5" stroke="currentColor" marker-end="url(#id-1a)"/></svg>'},3784:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 15"><path fill="currentColor" d="M0 4.96h1.715V3.452c0-.663.02-1.689.552-2.324C2.83.456 3.6 0 4.927 0 7.09 0 8 .279 8 .279l-.429 2.297S6.857 2.39 6.19 2.39s-1.263.216-1.263.82v1.75h2.734l-.19 2.243H4.926V15H1.715V7.204H0V4.96Z"/></svg>'},2611:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M11.669 0H4.33A4.336 4.336 0 0 0 0 4.331v7.338A4.336 4.336 0 0 0 4.331 16h7.338A4.336 4.336 0 0 0 16 11.67V4.33A4.336 4.336 0 0 0 11.669 0ZM8 12.375A4.38 4.38 0 0 1 3.625 8 4.38 4.38 0 0 1 8 3.625 4.38 4.38 0 0 1 12.375 8 4.38 4.38 0 0 1 8 12.375Zm4.48-7.718a1.294 1.294 0 0 1 0-2.586 1.294 1.294 0 0 1-.001 2.586Z"/><path fill="currentColor" d="M8 4.563A3.44 3.44 0 0 0 4.561 8 3.44 3.44 0 0 0 8 11.437 3.44 3.44 0 0 0 11.436 8 3.44 3.44 0 0 0 8 4.563Zm4.48-1.553a.355.355 0 1 0 0 .71.355.355 0 0 0 0-.71Z"/></svg>'},8212:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 35"><path fill="url(#id-2a)" d="m.002 0 17.582 17.418L35.002 35h-35V0Z"/><path fill="url(#id-3b)" d="M35 0 17.418 17.418 0 35h35V0Z"/><defs><linearGradient id="id-2a" x1="10.078" x2="26.517" y1="6.629" y2="33.674" gradientUnits="userSpaceOnUse"><stop stop-color="#373CB2"/><stop offset="1" stop-color="#646AF4"/></linearGradient><linearGradient id="id-3b" x1="17.5" x2="17.5" y1="0" y2="35" gradientUnits="userSpaceOnUse"><stop offset=".229" stop-color="#4147D2"/><stop offset="1" stop-color="#7277F5"/></linearGradient></defs></svg>'},8161:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 45 45"><path stroke="currentColor" d="M0 21.654h45M21.654 45V0"/></svg>'},9941:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 30"><path fill="currentColor" d="M48.546 21.866c-.228-.105-.65-.21-1.032.14-1.448 1.352-4.972 3.862-9.974 4.032-10.854.351-20.752-7.284-21.303-8.104 4.797-.977 7.06-3.428 7.664-6.43.657-3.253-.75-6.424-3.348-8.238C19.32 2.412 16.36.358 10.045.02 7.998-.086 5.037.26 3.648.886.264 2.412-.54 5.296.317 7.549c.434 1.14 1.501 1.755 2.422 1.755.733 0 .832-.439.832-.439-.95-.462-2.017-1.187-1.724-2.656.405-2.071 4.38-2.475 7.312-2.475 3.401 0 6.34.533 8.72 1.867 1.853 1.041 3.096 2.17 3.395 3.914.856 4.938-4.075 6.974-5.864 7.021 0 0 2.645-5.798 2.451-7.998-.094-1.094-1.313-1.685-2.656-1.685-.487 3.259-3.4 12.035-6.673 16.804 0 0 .446.66 1.788.257 2.276-.679 4.152-5.318 4.152-5.318 5.946 5.85 14.548 10.11 17.427 10.812 2.428.597 6.157.966 8.907-.012 4.04-1.433 7.623-5.382 8.157-6.763.164-.45-.258-.69-.417-.767Z"/></svg>'},641:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 42 21"><path fill="currentColor" fill-rule="evenodd" d="M31.265 14.488a4.067 4.067 0 1 0 0-8.134 4.067 4.067 0 0 0 0 8.134Zm0 6.354c5.755 0 10.42-4.666 10.42-10.42C41.686 4.665 37.02 0 31.266 0 25.51 0 20.845 4.666 20.845 10.421c0 5.755 4.665 10.421 10.42 10.421Z" clip-rule="evenodd"/><circle cx="10.421" cy="10.421" r="10.421" fill="currentColor"/></svg>'},1168:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 10"><path fill="currentColor" d="M17.43 9.029a.932.932 0 0 0-.06-.114c-.305-.547-.886-1.219-1.743-2.016l-.018-.02-.01-.007-.009-.01h-.008c-.39-.371-.637-.62-.74-.748-.189-.243-.232-.49-.128-.74.072-.188.347-.585.822-1.194.25-.322.447-.58.593-.776 1.052-1.398 1.508-2.293 1.368-2.682L17.443.63c-.036-.055-.131-.105-.283-.15a1.426 1.426 0 0 0-.583-.023l-2.628.018a.34.34 0 0 0-.182.004l-.118.028-.047.023-.036.028a.394.394 0 0 0-.1.095.618.618 0 0 0-.09.16c-.287.736-.613 1.42-.977 2.052a19.09 19.09 0 0 1-.622.98 4.698 4.698 0 0 1-.474.612c-.128.13-.243.237-.346.314-.105.08-.183.113-.238.101a5.689 5.689 0 0 1-.153-.037.603.603 0 0 1-.206-.223.986.986 0 0 1-.105-.356 3.807 3.807 0 0 1-.032-.37 8.572 8.572 0 0 1 .005-.437c.005-.189.01-.317.01-.383 0-.231.003-.482.013-.753l.022-.643c.005-.158.01-.325.01-.501S10.27.856 10.25.755a1.468 1.468 0 0 0-.096-.292.496.496 0 0 0-.19-.22A1.052 1.052 0 0 0 9.662.12C9.338.047 8.928.008 8.43.001 7.298-.01 6.57.063 6.249.221a1.265 1.265 0 0 0-.347.274c-.108.134-.124.207-.045.219.365.054.623.185.776.392l.055.11c.042.078.085.218.127.418.043.202.07.423.082.667.03.444.03.824 0 1.14-.03.316-.059.563-.087.739a1.46 1.46 0 0 1-.232.63.182.182 0 0 1-.045.046.674.674 0 0 1-.247.045c-.085 0-.188-.042-.31-.128a2.187 2.187 0 0 1-.378-.35 4.586 4.586 0 0 1-.443-.626 10.564 10.564 0 0 1-.511-.949l-.147-.264c-.09-.17-.215-.418-.373-.744-.158-.325-.299-.64-.42-.945a.592.592 0 0 0-.22-.29L3.44.575A.948.948 0 0 0 3.083.44L.584.458c-.256 0-.43.057-.52.172L.027.686A.308.308 0 0 0 0 .832c0 .067.019.15.055.247a30.39 30.39 0 0 0 1.19 2.481c.43.797.8 1.44 1.117 1.925.317.488.639.946.967 1.377.33.432.546.71.652.831.107.123.191.213.252.275l.227.218c.147.147.361.322.644.525.283.203.597.405.94.602.343.197.744.359 1.2.484a4.12 4.12 0 0 0 1.332.15h1.05c.214-.017.374-.085.484-.2l.035-.044a.638.638 0 0 0 .069-.17.953.953 0 0 0 .031-.251 2.99 2.99 0 0 1 .06-.706 1.93 1.93 0 0 1 .154-.475c.059-.106.123-.196.197-.27a.86.86 0 0 1 .154-.133c.03-.014.055-.023.072-.03.147-.05.318-.002.517.142.197.143.381.319.556.53.173.209.382.445.623.706.245.263.457.456.64.585l.182.108c.122.072.28.14.475.201.194.061.365.075.51.045l2.335-.036c.233 0 .411-.039.54-.115.127-.076.201-.159.227-.25a.727.727 0 0 0 .005-.31 1.107 1.107 0 0 0-.062-.245Z"/></svg>'}},function(t){t.O(0,[216],(function(){return 8423,t(t.s=8423)})),t.O()}]);