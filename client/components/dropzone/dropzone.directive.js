'use strict';

angular.module('randomFlicksApp')
  .directive('dropZone', function($rootScope, cache) {
    return {
      scope:{
       options:"=",
       information:"=",
       complete:"=",
       dropzone:"="
      },
      link:function(scope, element, attrs) {
        scope.files = [];
        var config = scope.options;
        config.url = attrs.action;

        config.init = function() {
          $rootScope.dropzone = this;

          this.on('sending', function(file,xhr,formData) {
            console.log(file);
            formData.append("name", scope.information.name);
          });

          this.on('success',function(){
            cache.toast("Successful", "Image has been saved.");
            $rootScope.dropzone.removeAllFiles();
            scope.complete();
//            cache.GoToPage('/manage');
          });

          this.on('error', function(){
            cache.toast("Error", "Image could not be saved.",'error');
          });

          this.on("addedfile", function() {
            scope.$apply();
          });

          this.on("removedfile", function() {
            scope.$apply();
          });

        };

        element.dropzone(config);

      }
    };
  });