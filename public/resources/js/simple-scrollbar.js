var averageScrollBarWidth = 18;
var minScrollHeightPX = 40;

(function(w, d) {
  var raf = w.requestAnimationFrame || w.setImmediate || function(c) { return setTimeout(c, 0); };

  function initEl(el) {
    if (el.hasOwnProperty('data-simple-scrollbar')) {
      el.dataSimpleScrollBar.moveBar();
      return;
    };
    var dataSimpleScrollBar = new SimpleScrollbar(el);
    el.dataSimpleScrollBar = dataSimpleScrollBar;
    Object.defineProperty(el, 'data-simple-scrollbar', dataSimpleScrollBar);
  }

  // Mouse drag handler
  function dragDealer(el, context) {
    var lastPageY;

    el.addEventListener('mousedown', function(e) {
      lastPageY = e.pageY;
      el.classList.add('ss-grabbed');
      d.body.classList.add('ss-grabbed');

      d.addEventListener('mousemove', drag);
      d.addEventListener('mouseup', stop);

      return false;
    });

    function drag(e) {
      var delta = e.pageY - lastPageY;
      lastPageY = e.pageY;

      raf(function() {
        context.el.scrollTop += delta / context.scrollRatio;
      });
    }

    function stop() {
      el.classList.remove('ss-grabbed');
      d.body.classList.remove('ss-grabbed');
      d.removeEventListener('mousemove', drag);
      d.removeEventListener('mouseup', stop);
    }
  }

  // Constructor
  function ss(el) {
    this.target = el;

    this.direction = window.getComputedStyle(this.target).direction;

    this.bar = '<div class="ss-scroll">';

    this.wrapper = d.createElement('div');
    this.wrapper.setAttribute('class', 'ss-wrapper');

    this.el = d.createElement('div');
    this.el.setAttribute('class', 'ss-content dragscroll');

    var contentWidth = el.offsetWidth + averageScrollBarWidth;
    this.el.setAttribute('style', 'width:' + contentWidth + 'px');

    if (this.direction === 'rtl') {
      this.el.classList.add('rtl');
    }

    this.wrapper.appendChild(this.el);

    while (this.target.firstChild) {
      this.el.appendChild(this.target.firstChild);
    }
    this.target.appendChild(this.wrapper);

    var css = window.getComputedStyle(el);
  	if (css.height === '0px' && css['max-height'] !== '0px') {
    	el.style.height = css['max-height'];
    } else if (!el.style.height) {
        el.style.height = css.height;
    }

    this.target.insertAdjacentHTML('beforeend', this.bar);
    this.bar = this.target.lastChild;

    dragDealer(this.bar, this);
    this.moveBar();

    this.el.addEventListener('scroll', this.moveBar.bind(this));
    this.el.addEventListener('mouseenter', this.moveBar.bind(this));

    this.target.classList.add('ss-container');
  }

  ss.prototype = {
    moveBar: function(e) {
      var totalHeight = this.el.scrollHeight,
          ownHeight = this.el.clientHeight,
          _this = this;

      this.scrollRatio = ownHeight / totalHeight;

      var isRtl = _this.direction === 'rtl';
      var right = isRtl ?
        (_this.target.clientWidth - _this.bar.clientWidth + 18) :
        (_this.target.clientWidth - _this.bar.clientWidth) * -1;

      var minPct = 15;
      var minPxPct = (minScrollHeightPX / ownHeight) * 100;
      var minHeightPercentage = Math.max(minPct, minPxPct);
      var heightPercentage = Math.max(_this.scrollRatio * 100, minHeightPercentage);

      raf(function() {
        // Hide scrollbar if no scrolling is possible
        if(_this.scrollRatio >= 1) {
          _this.bar.classList.add('ss-hidden')
        } else {
          _this.bar.classList.remove('ss-hidden');

          var topScroll = (_this.el.scrollTop / totalHeight ) * 100;
          var scrollablePercentage = (_this.el.scrollTop / (totalHeight - ownHeight)) * 100;
          var top = topScroll - (((heightPercentage / 100) - _this.scrollRatio) * scrollablePercentage);
          _this.bar.style.cssText = 'height:' + heightPercentage + '%; top:' + top + '%;right:' + right + 'px;';
        }
      });
    }
  }

  function initAll() {
    var nodes = d.querySelectorAll('*[ss-container]');

    for (var i = 0; i < nodes.length; i++) {
      initEl(nodes[i]);
    }
  }

  d.addEventListener('DOMContentLoaded', initAll);
  ss.initEl = initEl;
  ss.initAll = initAll;

  w.SimpleScrollbar = ss;
})(window, document);
