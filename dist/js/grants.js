"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[587],{7997:function(t,i,e){var n=e(9407),s=e(2398);n.Z.data("filters",(function(){var t;return{swiperIsInit:!1,init:function(){t=this},destroy:function(){t.destroySwiper()},initSwiper:function(){var t=this;this.swiperIsInit||(this.swiper=new s.ZP(this.$refs.swiper,{modules:[s.Rv],slidesPerView:"auto",freeMode:{enabled:!0,momentum:!1,momentumBounce:!1},on:{init:function(){t.swiperIsInit=!0},destroy:function(){t.swiperIsInit=!1}}}),setTimeout((function(){t.swiper.destroyed||t.swiper.update()}),1e3))},destroySwiper:function(){this.swiperIsInit&&this.swiper.destroy()},effect:function(){var t=this;this.$store.isDesktop?this.destroySwiper():this.$nextTick((function(){return t.initSwiper()}))}}}))},601:function(t,i,e){var n=e(9407),s=e(722);n.Z.data("header",(function(){return{isSticky:!1,mobMenuIsOpen:!1,init:function(){var t=this;this.updateStick(),this.$watch("mobMenuIsOpen",(function(i){i?(0,s.Qp)(t.$el,{reserveScrollBarGap:!0}):(0,s.tG)(t.$el)}))},updateStick:function(){this.$store.isDesktop?this.isSticky=scrollY>90/140*this.$el.offsetHeight:this.isSticky=!1},updateMobMenu:function(){this.$store.isDesktop&&(this.mobMenuIsOpen=!1)},toggleMobMenu:function(){this.mobMenuIsOpen=!this.mobMenuIsOpen}}}))},7012:function(t,i,e){e(5849);var n=e(9407),s=e(9667),r=e(4271);s.p8.registerPlugin(r.i),n.Z.data("scoreAnimated",(function(){return{init:function(){s.p8.timeline({scrollTrigger:{trigger:this.$el,start:"top bottom-=120",end:"bottom top+=120",toggleActions:"play pause play pause"}}).from(this.$refs.number,{autoAlpha:0,duration:.2}).from(this.$refs.number,{textContent:0,duration:1.4,onUpdate:function(){this.targets().forEach((function(t){t.innerHTML=Math.ceil(t.textContent).toLocaleString("ru")}))}},"-=0.2").from(this.$refs.plus,{autoAlpha:0,duration:.2})}}}))},7797:function(t,i,e){var n=e(1478),s=e.n(n),r=(e(7012),e(9407)),o=e(2398);r.Z.data("swiperCards",(function(){var t;return{swiperIsInit:!1,init:function(){t=this},destroy:function(){t.destroySwiper()},initSwiper:function(){var t=this;this.swiperIsInit||(this.swiper=new o.ZP(this.$refs.swiper,{slidesPerView:"auto",on:{init:function(){t.swiperIsInit=!0},destroy:function(){t.swiperIsInit=!1}}}))},destroySwiper:function(){this.swiperIsInit&&this.swiper.destroy()},effect:function(){var t=this;this.$store.isDesktop?this.destroySwiper():this.$nextTick((function(){return t.initSwiper()}))}}})),window.addEventListener("load",(function(){return new(s())(".section__rellax",{center:!0})}))},1340:function(t,i,e){var n=e(9407);e(601),e(7797),e(7997),n.Z.start()}},function(t){t.O(0,[216],(function(){return 1340,t(t.s=1340)})),t.O()}]);