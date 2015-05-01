'use strict';

angular.module('randomFlicksApp')
  .directive('listbox', function (cache) {
    return {
      templateUrl: 'components/listbox/listbox.html',
      restrict: 'EA',
      scope:{
        items:"=",
        options:"=",
        newTag:"="
      },
      link: function (scope) {
        scope.items = _.isArray(scope.items) ? scope.items : [];
        scope.active_import = '';

        var addNewTag = function(label){

          var hasTag = function(label){
            var tags = _.pluck(cache.tags,'label');
            return _.contains(tags,label);
          };

          if(!hasTag(label)){
            scope.newTag(label);
          }
        };

        scope.remove = function(item){
          scope.items.splice(_.indexOf(scope.items,item),1);
        };

        scope.add = function(item){
          console.log(item)
          var obj = item['originalObject'];
          var value = _.isObject(obj) ? _.first(_.values(obj)) : obj;
          scope.items.push(value);
          addNewTag(value)
        };

      }
    };
  });