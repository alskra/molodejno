(self.webpackChunk=self.webpackChunk||[]).push([[943],{601:function(t,e,n){"use strict";var i=n(9407),s=n(722);i.Z.data("header",(function(){return{isSticky:!1,mobMenuIsOpen:!1,init:function(){var t=this;this.updateStick(),this.$watch("mobMenuIsOpen",(function(e){e?(0,s.Qp)(t.$el,{reserveScrollBarGap:!0}):(0,s.tG)(t.$el)}))},updateStick:function(){this.$store.isDesktop?this.isSticky=scrollY>90/140*this.$el.offsetHeight:this.isSticky=!1},updateMobMenu:function(){this.$store.isDesktop&&(this.mobMenuIsOpen=!1)},toggleMobMenu:function(){this.mobMenuIsOpen=!this.mobMenuIsOpen}}}))},3116:function(t,e,n){"use strict";n(4379),n(483),n(4436);var i=n(7329),s=function(){return document.documentElement.style.setProperty("--scrollbar-width","".concat(innerWidth-document.body.clientWidth,"px"))};s(),new i.Z(s).observe(document.body);var o=n(5566),r=n.n(o),u=n(9407);window.Alpine=u.Z,u.Z.store("isDesktop",innerWidth>=1025),window.addEventListener("resize",(function(){u.Z.store("isDesktop",innerWidth>=1025)})),r().init(),alert(innerWidth+", "+u.Z.store("isDesktop"))},4436:function(){var t=function(){return document.documentElement.style.setProperty("--vh","".concat(innerHeight/100,"px"))};t(),window.addEventListener("resize",t)},4103:function(t,e,n){"use strict";var i=n(9407);n(3116),n(601),i.Z.start()}},function(t){t.O(0,[216],(function(){return 4103,t(t.s=4103)})),t.O()}]);