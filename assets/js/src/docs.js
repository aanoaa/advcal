!function ($) {
  'use strict';
  $(function () {
    setTimeout(function () {
      var $sideBar = $('.docs-sidebar');

      $sideBar.affix({
        offset: {
          top: function () {
            var offsetTop      = $sideBar.offset().top;
            var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10);
            var navOuterHeight = $('.docs-nav').height();

            return (this.top = offsetTop - navOuterHeight - sideBarMargin);
          },
          bottom: function () {
            return (this.bottom = $('.docs-footer').outerHeight(true));
          }
        }
      });
    }, 100);
  });
}(jQuery);

(function () {
  anchors.options.placement = 'left';

  anchors.add('.advcal-header > .container > h1, .advcal-container > .row > div > h1, .advcal-container > .row > div > h2, .advcal-container > .row > div > h3, .advcal-container > .row > div > h4, .advcal-container > .row > div > h5');
})();
