(self.webpackChunk=self.webpackChunk||[]).push([[269],{2247:function(t,e,n){"use strict";n(5610),n(7460),n(1013),n(8010),n(5623),n(1514),n(9407).Z.data("articleNav",(function(){return{hash:location.hash,update:function(){var t=Array.from(document.querySelectorAll("[id]")),e=Array.from(this.$root.querySelectorAll(".article-nav__item")).map((function(t){return t.hash}));t=t.filter((function(t){return e.includes("#".concat(t.id))}));for(var n,i=0;i<t.length;i++){var r=t[i].getBoundingClientRect();Math.floor(r.top)<=0&&(n=t[i])}n&&(history.replaceState(null,null,"#".concat(n.id)),this.hash=location.hash)}}}))},6890:function(t,e,n){"use strict";n(9146)},601:function(t,e,n){"use strict";var i=n(9407),r=n(722);i.Z.data("header",(function(){return{isSticky:!1,mobMenuIsOpen:!1,init:function(){var t=this;this.updateStick(),this.$watch("mobMenuIsOpen",(function(e){e?(0,r.Qp)(t.$el,{reserveScrollBarGap:!0}):(0,r.tG)(t.$el)}))},updateStick:function(){this.$store.isDesktop?this.isSticky=scrollY>90/140*this.$el.offsetHeight:this.isSticky=!1},updateMobMenu:function(){this.$store.isDesktop&&(this.mobMenuIsOpen=!1)},toggleMobMenu:function(){this.mobMenuIsOpen=!this.mobMenuIsOpen}}}))},7012:function(t,e,n){"use strict";n(5849);var i=n(9407),r=n(9667),s=n(4271);r.p8.registerPlugin(s.i),i.Z.data("scoreAnimated",(function(){return{init:function(){r.p8.timeline({scrollTrigger:{trigger:this.$el,start:"top bottom-=120",end:"bottom top+=120",toggleActions:"play pause play pause"}}).from(this.$refs.number,{autoAlpha:0,duration:.2}).from(this.$refs.number,{textContent:0,duration:1.4,onUpdate:function(){this.targets().forEach((function(t){t.innerHTML=Math.ceil(t.textContent).toLocaleString("ru")}))}},"-=0.2").from(this.$refs.plus,{autoAlpha:0,duration:.2})}}}))},2046:function(t,e,n){"use strict";var i=n(1478),r=n.n(i);n(7012),n(3153),window.addEventListener("load",(function(){return new(r())(".section__rellax",{center:!0})}))},3153:function(t,e,n){"use strict";var i=n(9407),r=n(8305);i.Z.data("swiperCards",(function(){var t;return{swiper:void 0,swiperIsInit:!1,init:function(){t=this},destroy:function(){t.destroySwiper()},initSwiper:function(){var t=this;this.swiperIsInit||(this.swiper=new r.ZP(this.$refs.swiper,{slidesPerView:"auto",on:{init:function(){t.swiperIsInit=!0},destroy:function(){t.swiperIsInit=!1}}}))},destroySwiper:function(){this.swiperIsInit&&this.swiper.destroy()},effect:function(){var t=this;this.$store.isDesktop?this.destroySwiper():this.$nextTick((function(){return t.initSwiper()}))}}}))},9146:function(t,e,n){"use strict";var i=n(9407),r=n(8305);i.Z.data("swiperFraction",(function(){var t;return{swiper:void 0,swiperIsInit:!1,init:function(){var e=this;t=this,this.$nextTick((function(){return e.initSwiper()}))},destroy:function(){t.destroySwiper()},initSwiper:function(){var t=this;this.swiperIsInit||(this.swiper=new r.ZP(this.$refs.swiper,{modules:[r.W_,r.tl],slidesPerView:"auto",on:{init:function(){t.swiperIsInit=!0},destroy:function(){t.swiperIsInit=!1}},navigation:{prevEl:this.$refs.prevEl,nextEl:this.$refs.nextEl},pagination:{el:this.$refs.pagination,type:"fraction",modifierClass:"swiper-fraction__pagination--",currentClass:"swiper-fraction__pagination-current",totalClass:"swiper-fraction__pagination-total"}}))},destroySwiper:function(){this.swiperIsInit&&this.swiper.destroy()}}}))},718:function(t,e,n){"use strict";n(4379),n(483),n(4436);var i=n(7329),r=function(){return document.documentElement.style.setProperty("--scrollbar-width","".concat(innerWidth-document.body.clientWidth,"px"))};r(),new i.Z(r).observe(document.body);var s=n(5566),o=n.n(s),c=n(9407),a=(n(3214),n(2951)),l=n(1976),u=n(7591),f=n(82),h=n(7597),p=n(4138);n(5849),n(3938),n(5769),n(3238),n(4078),n(2077),n(911),n(2482),n(3352),n(8410),n(5623);var v=n(5630),d={},w=new i.Z((function(t){t.forEach((function(t){var e=t.contentBoxSize&&t.contentBoxSize[0]||t.contentBoxSize,n=e&&e.inlineSize||t.contentRect.width,i=e&&e.blockSize||t.contentRect.height,r="0 0 ".concat(n/(i||1)*t.target.svgViewBoxHeight," ").concat(t.target.svgViewBoxHeight);t.target.svgEl.setAttribute("viewBox",r)}))}));v.keys().forEach((function(t){var e=t.split("/").pop().replace(/\.\w+$/,"");d[e]=v(t).default||v(t)}));var g=function(t){(0,u.Z)(r,t);var e,n,i=(e=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=(0,h.Z)(e);if(n){var r=(0,h.Z)(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return(0,f.Z)(this,t)});function r(){var t;return(0,a.Z)(this,r),(t=i.call(this)).attachShadow({mode:"open"}),t}return(0,l.Z)(r,[{key:"name",get:function(){return this.getAttribute("name")}},{key:"update",value:function(){this.shadowRoot.innerHTML=d[this.name],this.svgEl=this.shadowRoot.querySelector("svg"),Object.assign(this.svgEl.style,{display:"block",width:"100%",height:"100%"}),w.unobserve(this),["arrow-left","arrow-right"].includes(this.name)&&(this.svgViewBoxHeight=+this.svgEl.getAttribute("viewBox").split(/\s+/).pop(),w.observe(this))}},{key:"disconnected",value:function(){w.unobserve(this)}},{key:"attributeChangedCallback",value:function(t){"name"===t&&this.update()}}],[{key:"observedAttributes",get:function(){return["name"]}}]),r}((0,p.Z)(HTMLElement));customElements.define("icon-svg",g),c.Z.data("lineClamp",(function(){return{hasClamp:!1,isClamped:!0,init:function(){this.update()},update:function(){var t=this;this.isClamped=!0,this.$nextTick((function(){t.hasClamp=t.$refs.content.scrollHeight>t.$refs.content.clientHeight}))}}})),window.Alpine=c.Z,c.Z.store("isDesktop",innerWidth>=1025),window.addEventListener("resize",(function(){c.Z.store("isDesktop",innerWidth>=1025)})),o().init()},4436:function(){var t=function(){return document.documentElement.style.setProperty("--vh","".concat(innerHeight/100,"px"))};t(),window.addEventListener("resize",t)},2610:function(t,e,n){"use strict";var i=n(9407);n(718),n(601),n(2247),n(6890),n(2046),i.Z.start()},5630:function(t,e,n){var i={"./arrow-down.svg":8348,"./arrow-left.svg":3773,"./arrow-right.svg":4863,"./doc.svg":7743,"./facebook.svg":3784,"./instagram.svg":2611,"./logo-sticky.svg":8212,"./pdf.svg":740,"./plus.svg":8161,"./renaissance.svg":9941,"./share.svg":6455,"./twitter.svg":9023,"./visually.svg":641,"./vk.svg":1168,"./xls.svg":1444};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=s,t.exports=r,r.id=5630},8348:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 26"><path stroke="currentColor" d="M13.566 0v24.6M26 10.28 13.315 25M1 10.28 13.685 25"/></svg>'},3773:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 27"><defs><marker id="id-1a" markerHeight="27" markerWidth="17" orient="0" refX="1" refY="13.5"><path stroke="currentColor" d="M15.72 1 1 13.685M15.72 26 1 13.315"/></marker></defs><line x1="0" x2="100%" y1="13.5" y2="13.5" stroke="currentColor" marker-start="url(#id-1a)"/></svg>'},4863:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 27"><defs><marker id="id-1a" markerHeight="27" markerWidth="17" orient="0" refX="16" refY="13.5"><path stroke="currentColor" d="M1.28 1 16 13.685M1.28 26 16 13.315"/></marker></defs><line x1="0" x2="100%" y1="13.5" y2="13.5" stroke="currentColor" marker-end="url(#id-1a)"/></svg>'},7743:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 65 80"><path fill="currentColor" d="M0 0h65v80H0z"/><path fill="#fff" d="M9.54 20.6h5.742c2.244 0 4.114.74 5.61 2.222 1.51 1.467 2.266 3.293 2.266 5.478 0 2.185-.755 4.019-2.266 5.5-1.496 1.467-3.366 2.2-5.61 2.2H9.54V20.6Zm3.74 3.564v8.272h2.002c1.217 0 2.207-.381 2.97-1.144.777-.763 1.166-1.76 1.166-2.992s-.389-2.23-1.166-2.992c-.763-.763-1.753-1.144-2.97-1.144H13.28Zm13.277-1.54c1.555-1.54 3.469-2.31 5.742-2.31 2.274 0 4.18.77 5.72 2.31 1.555 1.525 2.332 3.417 2.332 5.676 0 2.259-.777 4.158-2.332 5.698-1.54 1.525-3.446 2.288-5.72 2.288-2.273 0-4.187-.763-5.742-2.288-1.54-1.54-2.31-3.44-2.31-5.698 0-2.259.77-4.15 2.31-5.676Zm8.8 2.508c-.806-.836-1.826-1.254-3.058-1.254-1.232 0-2.251.418-3.058 1.254-.806.821-1.21 1.877-1.21 3.168 0 1.29.404 2.354 1.21 3.19.807.821 1.826 1.232 3.058 1.232 1.232 0 2.252-.41 3.058-1.232.807-.836 1.21-1.9 1.21-3.19s-.403-2.347-1.21-3.168Zm14.136-4.818c1.95 0 3.637.572 5.06 1.716 1.437 1.144 2.347 2.625 2.728 4.444h-3.938a3.85 3.85 0 0 0-1.474-1.892c-.675-.47-1.467-.704-2.376-.704-1.232 0-2.252.418-3.058 1.254-.807.836-1.21 1.892-1.21 3.168 0 1.29.403 2.354 1.21 3.19.806.821 1.826 1.232 3.058 1.232.601 0 1.158-.103 1.672-.308.513-.22.953-.52 1.32-.902a3.91 3.91 0 0 0 .858-1.364h3.938c-.381 1.804-1.29 3.278-2.728 4.422-1.423 1.144-3.11 1.716-5.06 1.716a8.238 8.238 0 0 1-3.168-.616 7.966 7.966 0 0 1-2.574-1.672 8.062 8.062 0 0 1-1.694-2.53 8.238 8.238 0 0 1-.616-3.168c0-2.259.77-4.15 2.31-5.676 1.555-1.54 3.468-2.31 5.742-2.31Z"/><path stroke="#fff" d="M10 69.5h46m-23.5.5V50"/></svg>'},3784:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 15"><path fill="currentColor" d="M0 4.96h1.715V3.452c0-.663.02-1.689.552-2.324C2.83.456 3.6 0 4.927 0 7.09 0 8 .279 8 .279l-.429 2.297S6.857 2.39 6.19 2.39s-1.263.216-1.263.82v1.75h2.734l-.19 2.243H4.926V15H1.715V7.204H0V4.96Z"/></svg>'},2611:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M11.669 0H4.33A4.336 4.336 0 0 0 0 4.331v7.338A4.336 4.336 0 0 0 4.331 16h7.338A4.336 4.336 0 0 0 16 11.67V4.33A4.336 4.336 0 0 0 11.669 0ZM8 12.375A4.38 4.38 0 0 1 3.625 8 4.38 4.38 0 0 1 8 3.625 4.38 4.38 0 0 1 12.375 8 4.38 4.38 0 0 1 8 12.375Zm4.48-7.718a1.294 1.294 0 0 1 0-2.586 1.294 1.294 0 0 1-.001 2.586Z"/><path fill="currentColor" d="M8 4.563A3.44 3.44 0 0 0 4.561 8 3.44 3.44 0 0 0 8 11.437 3.44 3.44 0 0 0 11.436 8 3.44 3.44 0 0 0 8 4.563Zm4.48-1.553a.355.355 0 1 0 0 .71.355.355 0 0 0 0-.71Z"/></svg>'},8212:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 35"><path fill="url(#id-2a)" d="m.002 0 17.582 17.418L35.002 35h-35V0Z"/><path fill="url(#id-3b)" d="M35 0 17.418 17.418 0 35h35V0Z"/><defs><linearGradient id="id-2a" x1="10.078" x2="26.517" y1="6.629" y2="33.674" gradientUnits="userSpaceOnUse"><stop stop-color="#373CB2"/><stop offset="1" stop-color="#646AF4"/></linearGradient><linearGradient id="id-3b" x1="17.5" x2="17.5" y1="0" y2="35" gradientUnits="userSpaceOnUse"><stop offset=".229" stop-color="#4147D2"/><stop offset="1" stop-color="#7277F5"/></linearGradient></defs></svg>'},740:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 65 80"><path fill="currentColor" d="M0 0h65v80H0z"/><path fill="#fff" d="M24.354 31.16H16.28V36h-3.74V20.6h11.814v10.56Zm-8.074-6.996v3.432h4.334v-3.432H16.28ZM27.321 20.6h5.742c2.244 0 4.114.74 5.61 2.222 1.51 1.467 2.266 3.293 2.266 5.478 0 2.185-.755 4.019-2.266 5.5-1.496 1.467-3.366 2.2-5.61 2.2h-5.742V20.6Zm3.74 3.564v8.272h2.002c1.218 0 2.208-.381 2.97-1.144.778-.763 1.166-1.76 1.166-2.992s-.388-2.23-1.166-2.992c-.762-.763-1.752-1.144-2.97-1.144h-2.002Zm22.892 0h-6.864v2.442h6.358v3.564h-6.358V36h-3.74V20.6h10.604v3.564Z"/><path stroke="#fff" d="M10 69.5h46m-23.5.5V50"/></svg>'},8161:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 45 45"><path stroke="currentColor" d="M0 21.654h45M21.654 45V0"/></svg>'},9941:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 30"><path fill="currentColor" d="M48.546 21.866c-.228-.105-.65-.21-1.032.14-1.448 1.352-4.972 3.862-9.974 4.032-10.854.351-20.752-7.284-21.303-8.104 4.797-.977 7.06-3.428 7.664-6.43.657-3.253-.75-6.424-3.348-8.238C19.32 2.412 16.36.358 10.045.02 7.998-.086 5.037.26 3.648.886.264 2.412-.54 5.296.317 7.549c.434 1.14 1.501 1.755 2.422 1.755.733 0 .832-.439.832-.439-.95-.462-2.017-1.187-1.724-2.656.405-2.071 4.38-2.475 7.312-2.475 3.401 0 6.34.533 8.72 1.867 1.853 1.041 3.096 2.17 3.395 3.914.856 4.938-4.075 6.974-5.864 7.021 0 0 2.645-5.798 2.451-7.998-.094-1.094-1.313-1.685-2.656-1.685-.487 3.259-3.4 12.035-6.673 16.804 0 0 .446.66 1.788.257 2.276-.679 4.152-5.318 4.152-5.318 5.946 5.85 14.548 10.11 17.427 10.812 2.428.597 6.157.966 8.907-.012 4.04-1.433 7.623-5.382 8.157-6.763.164-.45-.258-.69-.417-.767Z"/></svg>'},6455:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25"><path fill="currentColor" d="M5.477 17.979A5.485 5.485 0 0 1 0 12.499a5.483 5.483 0 0 1 5.477-5.475 5.483 5.483 0 0 1 5.479 5.476 5.485 5.485 0 0 1-5.479 5.479Zm0-8.487A3.012 3.012 0 0 0 2.47 12.5a3.012 3.012 0 0 0 3.008 3.008c1.658 0 3.01-1.35 3.01-3.008a3.013 3.013 0 0 0-3.01-3.008Zm14.044 1.464a5.484 5.484 0 0 1-5.478-5.479A5.482 5.482 0 0 1 19.522 0 5.485 5.485 0 0 1 25 5.477a5.487 5.487 0 0 1-5.479 5.479Zm0-8.487a3.015 3.015 0 0 0-3.01 3.008 3.016 3.016 0 0 0 3.01 3.01 3.013 3.013 0 0 0 3.008-3.01 3.012 3.012 0 0 0-3.008-3.008Zm0 22.528a5.483 5.483 0 0 1-5.478-5.476 5.484 5.484 0 0 1 5.479-5.479A5.486 5.486 0 0 1 25 19.521a5.485 5.485 0 0 1-5.479 5.476Zm0-8.484a3.014 3.014 0 0 0-3.01 3.008 3.015 3.015 0 0 0 3.01 3.008 3.012 3.012 0 0 0 3.008-3.008 3.011 3.011 0 0 0-3.008-3.008Z"/><path fill="currentColor" d="M15.728 18.86a1.26 1.26 0 0 1-.55-.128L8.718 15.5a1.235 1.235 0 0 1 1.104-2.211l6.462 3.23a1.235 1.235 0 0 1-.556 2.34ZM9.27 11.838a1.23 1.23 0 0 1-1.103-.684A1.23 1.23 0 0 1 8.719 9.5l6.458-3.232a1.235 1.235 0 1 1 1.102 2.21l-6.457 3.229a1.186 1.186 0 0 1-.551.13Z"/></svg>'},9023:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" style="enable-background:new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve"><path fill="currentColor" d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"/></svg>'},641:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 42 21"><path fill="currentColor" fill-rule="evenodd" d="M31.265 14.488a4.067 4.067 0 1 0 0-8.134 4.067 4.067 0 0 0 0 8.134Zm0 6.354c5.755 0 10.42-4.666 10.42-10.42C41.686 4.665 37.02 0 31.266 0 25.51 0 20.845 4.666 20.845 10.421c0 5.755 4.665 10.421 10.42 10.421Z" clip-rule="evenodd"/><circle cx="10.421" cy="10.421" r="10.421" fill="currentColor"/></svg>'},1168:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 10"><path fill="currentColor" d="M17.43 9.029a.932.932 0 0 0-.06-.114c-.305-.547-.886-1.219-1.743-2.016l-.018-.02-.01-.007-.009-.01h-.008c-.39-.371-.637-.62-.74-.748-.189-.243-.232-.49-.128-.74.072-.188.347-.585.822-1.194.25-.322.447-.58.593-.776 1.052-1.398 1.508-2.293 1.368-2.682L17.443.63c-.036-.055-.131-.105-.283-.15a1.426 1.426 0 0 0-.583-.023l-2.628.018a.34.34 0 0 0-.182.004l-.118.028-.047.023-.036.028a.394.394 0 0 0-.1.095.618.618 0 0 0-.09.16c-.287.736-.613 1.42-.977 2.052a19.09 19.09 0 0 1-.622.98 4.698 4.698 0 0 1-.474.612c-.128.13-.243.237-.346.314-.105.08-.183.113-.238.101a5.689 5.689 0 0 1-.153-.037.603.603 0 0 1-.206-.223.986.986 0 0 1-.105-.356 3.807 3.807 0 0 1-.032-.37 8.572 8.572 0 0 1 .005-.437c.005-.189.01-.317.01-.383 0-.231.003-.482.013-.753l.022-.643c.005-.158.01-.325.01-.501S10.27.856 10.25.755a1.468 1.468 0 0 0-.096-.292.496.496 0 0 0-.19-.22A1.052 1.052 0 0 0 9.662.12C9.338.047 8.928.008 8.43.001 7.298-.01 6.57.063 6.249.221a1.265 1.265 0 0 0-.347.274c-.108.134-.124.207-.045.219.365.054.623.185.776.392l.055.11c.042.078.085.218.127.418.043.202.07.423.082.667.03.444.03.824 0 1.14-.03.316-.059.563-.087.739a1.46 1.46 0 0 1-.232.63.182.182 0 0 1-.045.046.674.674 0 0 1-.247.045c-.085 0-.188-.042-.31-.128a2.187 2.187 0 0 1-.378-.35 4.586 4.586 0 0 1-.443-.626 10.564 10.564 0 0 1-.511-.949l-.147-.264c-.09-.17-.215-.418-.373-.744-.158-.325-.299-.64-.42-.945a.592.592 0 0 0-.22-.29L3.44.575A.948.948 0 0 0 3.083.44L.584.458c-.256 0-.43.057-.52.172L.027.686A.308.308 0 0 0 0 .832c0 .067.019.15.055.247a30.39 30.39 0 0 0 1.19 2.481c.43.797.8 1.44 1.117 1.925.317.488.639.946.967 1.377.33.432.546.71.652.831.107.123.191.213.252.275l.227.218c.147.147.361.322.644.525.283.203.597.405.94.602.343.197.744.359 1.2.484a4.12 4.12 0 0 0 1.332.15h1.05c.214-.017.374-.085.484-.2l.035-.044a.638.638 0 0 0 .069-.17.953.953 0 0 0 .031-.251 2.99 2.99 0 0 1 .06-.706 1.93 1.93 0 0 1 .154-.475c.059-.106.123-.196.197-.27a.86.86 0 0 1 .154-.133c.03-.014.055-.023.072-.03.147-.05.318-.002.517.142.197.143.381.319.556.53.173.209.382.445.623.706.245.263.457.456.64.585l.182.108c.122.072.28.14.475.201.194.061.365.075.51.045l2.335-.036c.233 0 .411-.039.54-.115.127-.076.201-.159.227-.25a.727.727 0 0 0 .005-.31 1.107 1.107 0 0 0-.062-.245Z"/></svg>'},1444:function(t){"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 65 80"><path fill="currentColor" d="M0 0h65v80H0z"/><path fill="#fff" d="M22.098 28.278 27.004 36H22.56l-2.838-4.796L16.994 36H12.55l4.928-8.008-4.686-7.392h4.444l2.596 4.444 2.596-4.444h4.444l-4.774 7.678Zm10.715 4.158h6.358V36H29.073V20.6h3.74v11.836Zm19.42-8.272h-7.216v2.2h7.216V36H41.277v-3.564h7.216v-2.508h-7.216V20.6h10.956v3.564Z"/><path stroke="#fff" d="M10 69.5h46m-23.5.5V50"/></svg>'}},function(t){t.O(0,[216],(function(){return 2610,t(t.s=2610)})),t.O()}]);