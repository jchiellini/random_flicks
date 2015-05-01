'use strict';

angular.module('randomFlicksApp')
  .controller('ManageCtrl', function ($scope, $rootScope, cache, DataDelegate) {
    $scope.rootScope = $rootScope;
    $scope.cache = cache;
    $scope.current = {};
    $scope.tabs = ["Shop","Events","About","Misc"];

    $scope.$watch('current.selected_tab',function(newVal){
      $scope.current.selected_path = 'app/manage/partials/_'+newVal+'.html';
    });

    $scope.Init = function(){
      DataDelegate.tags().success(function(d){
        cache.tags = d;
        console.log("Tags:",d);
      }).error(function(){
          cache.toast("Unsuccessful", "Tags could not be retrieved.",'error');
        });
    };


  });
