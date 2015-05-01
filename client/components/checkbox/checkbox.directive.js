'use strict';

angular.module('randomFlicksApp')
  .directive('checkbox', function() {
    return {
      templateUrl: 'components/checkbox/checkbox.html',
      restrict: 'EA',
      scope:{
       model:"=",
       label:"@",
       change:"="
      },
      link:function(scope) {
        scope.model = _.isUndefined(scope.model) ? false : scope.model;

        scope.$watch('model',function(newVal,oldVal){
          if(scope.change){
            scope.change(newVal,oldVal);
          }
        });
      }
    };
  });