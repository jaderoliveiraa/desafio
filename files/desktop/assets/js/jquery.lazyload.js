!function(e,t){var o=e(t);e.fn.lazyload=function(i){function n(){var t=0;f.each(function(){var o=e(this);if(!l.skip_invisible||o.is(":visible"))if(e.abovethetop(this,l)||e.leftofbegin(this,l));else if(e.belowthefold(this,l)||e.rightoffold(this,l)){if(++t>l.failure_limit)return!1}else o.trigger("appear")})}var r,f=this,l={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return i&&(void 0!==i.failurelimit&&(i.failure_limit=i.failurelimit,delete i.failurelimit),void 0!==i.effectspeed&&(i.effect_speed=i.effectspeed,delete i.effectspeed),e.extend(l,i)),r=void 0===l.container||l.container===t?o:e(l.container),0===l.event.indexOf("scroll")&&r.bind(l.event,function(){return n()}),this.each(function(){var t=this,o=e(t);t.loaded=!1,o.one("appear",function(){if(!this.loaded){if(l.appear){var i=f.length;l.appear.call(t,i,l)}e("<img />").bind("load",function(){o.hide().attr("src",o.data(l.data_attribute))[l.effect](l.effect_speed),t.loaded=!0;var i=e.grep(f,function(e){return!e.loaded});if(f=e(i),l.load){var n=f.length;l.load.call(t,n,l)}}).attr("src",o.data(l.data_attribute))}}),0!==l.event.indexOf("scroll")&&o.bind(l.event,function(){t.loaded||o.trigger("appear")})}),o.bind("resize",function(){n()}),n(),this},e.belowthefold=function(i,n){var r;return r=void 0===n.container||n.container===t?o.height()+o.scrollTop():e(n.container).offset().top+e(n.container).height(),r<=e(i).offset().top-n.threshold},e.rightoffold=function(i,n){var r;return r=void 0===n.container||n.container===t?o.width()+o.scrollLeft():e(n.container).offset().left+e(n.container).width(),r<=e(i).offset().left-n.threshold},e.abovethetop=function(i,n){var r;return r=void 0===n.container||n.container===t?o.scrollTop():e(n.container).offset().top,r>=e(i).offset().top+n.threshold+e(i).height()},e.leftofbegin=function(i,n){var r;return r=void 0===n.container||n.container===t?o.scrollLeft():e(n.container).offset().left,r>=e(i).offset().left+n.threshold+e(i).width()},e.inviewport=function(t,o){return!(e.rightofscreen(t,o)||e.leftofscreen(t,o)||e.belowthefold(t,o)||e.abovethetop(t,o))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return!e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window);