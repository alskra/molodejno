"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[826],{601:function(t,e,n){var i=n(9407),s=n(722);i.Z.data("header",(function(){return{isSticky:!1,mobMenuIsOpen:!1,init:function(){var t=this;this.updateStick(),this.$watch("mobMenuIsOpen",(function(e){e?(0,s.Qp)(t.$el,{reserveScrollBarGap:!0}):(0,s.tG)(t.$el)}))},updateStick:function(){this.$store.isDesktop?this.isSticky=scrollY>90/140*this.$el.offsetHeight:this.isSticky=!1},updateMobMenu:function(){this.$store.isDesktop&&(this.mobMenuIsOpen=!1)},toggleMobMenu:function(){this.mobMenuIsOpen=!this.mobMenuIsOpen}}}))},154:function(t,e,n){var i=n(9407);n(601);try{i.Z.start(),document.body.prepend("LOAD")}catch(t){document.body.prepend(t)}}},function(t){t.O(0,[216],(function(){return 154,t(t.s=154)})),t.O()}]);