(function(d){var h="cursometer";function g(m,n){this.x=m;this.y=n}function i(m,n){this.point=m;this.timestamp=n}function e(m){return this.each(function(){m&&d.extend(j,m);var o=d(this);var n={options:m,_currSpeed:0,_updateSpeedTimeout:null,_lastMousePos:null,_currMousePos:null,_hasAttachedMousemoveEvent:false};o.data(h,n);o.mouseenter(b);o.mouseleave(f);l.apply(this)})}function b(){var r=d(this);var q=r.data(h);var m=q._currMousePos;var o=q._lastMousePos;var p=0;if(m&&o){var s=a(m.point,o.point);p=(s/(m.timestamp-o.timestamp))}var n=q._currSpeed=p;q.options.onUpdateSpeed&&q.options.onUpdateSpeed.apply(r[0],[n]);q._updateSpeedTimeout=setTimeout(function(){b.apply(r[0])},q.options.speedPollingRate)}function f(){var n=d(this);var m=n.data(h);m._currSpeed=0;m._lastMousePosCalc=null;m._currMousePosCalc=null;m._hasAttachedMousemoveEvent=false;m._updateSpeedTimeout&&clearTimeout(m._updateSpeedTimeout)}function l(){var n=d(this);var m=n.data(h);if(m._hasAttachedMousemoveEvent){return}n.one("mousemove."+h,function(p){if(m._currMousePos){m._lastMousePos=m._currMousePos}var r=p.pageX;var q=p.pageY;var o=new g(r,q);m._currMousePos=new i(o,(new Date()).getTime());setTimeout(function(){l.apply(n[0])},m.options.captureMouseMoveRate);m._hasAttachedMousemoveEvent=false});m._hasAttachedMousemoveEvent=true}function a(n,m){var q=0;if(n&&m){var p=Math.pow((n.x-m.x),2);var o=Math.pow((n.y-m.y),2);q=Math.sqrt(p+o)}return q}function k(){return d(this).data(h)._currSpeed}var c={init:e,getCurrentSpeed:k};var j={updateSpeedRate:20,captureMouseMoveRate:15,onUpdateSpeed:d.noop};d.fn.cursometer=function(m){if(c[m]){return c[m].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof(m)==="object"||!m){return c.init.apply(this,arguments)}else{d.error("Method "+m+" does not exist on jQuery.cursometer")}}}})(jQuery);