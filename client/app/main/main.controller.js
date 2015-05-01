'use strict';

angular.module('randomFlicksApp')
  .controller('MainCtrl', function ($scope, $rootScope, $http, $document, $window, cache) {
    $scope.cache = cache;
    cache.navHeight = $window.innerHeight - 70;


    $scope.Init = function(){
      $document.bind('scroll', function() {
        cache.scroll_top = $document.scrollTop();
        $scope.$apply();
      });

      if(cache.isMobile()){
        cache.navHeight = 460;
      }
    };

  });
