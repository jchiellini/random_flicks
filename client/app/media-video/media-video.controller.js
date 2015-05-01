'use strict';

angular.module('randomFlicksApp')
  .controller('MediaVideoCtrl', function ($scope, DataDelegate, cache, $stateParams) {
    $scope.cache = cache;

    $scope.Init = function(){
      if($stateParams.id){
        $scope.link = $stateParams.id;
      }else{
        cache.GoToPage("/");
      }
    };

    $scope.playerVars = {
      controls: 1,
      autoplay: 1,
      autohide: 1,
      fs: 1
    };

    $scope.link = "http://www.youtube.com/embed/Onq6awN0gXU";

  });
