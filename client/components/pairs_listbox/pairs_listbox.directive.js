'use strict';

angular.module('randomFlicksApp')
  .directive('pairsListbox', function () {
    return {
      templateUrl: 'components/pairs_listbox/pairs_listbox.html',
      restrict: 'EA',
      scope:{
        items:"="
      },
      link: function (scope) {
        scope.items = _.isArray(scope.items) ? scope.items : [];

        scope.remove = function(item){
          scope.items.splice(_.indexOf(scope.items,item),1);
        };

        scope.new_pair = {
          key:'',
          value:''
        };

        scope.add = function(item){
          console.log(item)
          scope.items.push(item);

          scope.new_pair = {
            key:'',
            value:''
          }
        };

      }
    };
  });