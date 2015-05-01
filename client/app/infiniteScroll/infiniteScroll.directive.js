'use strict';

angular.module('randomFlicksApp')
  .directive('infiniteScroll', function () {
    return function(scope, elm, attr) {
      var raw = elm[0];

      var funCheckBounds = function() {
        var rectObject = raw.getBoundingClientRect();
        if (rectObject.bottom === window.innerHeight) {
          scope.$apply(attr.infiniteScroll);
        }

      };

      angular.element(window).bind('scroll load', funCheckBounds);


    };
  });