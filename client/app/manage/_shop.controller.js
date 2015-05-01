'use strict';

angular.module('randomFlicksApp')
  .controller('_ShopCtrl', function ($scope, $rootScope, cache, DataDelegate) {
    $scope.rootScope = $rootScope;
    $scope.cache = cache;
    $scope.current = {};
    $scope.active_content = {
      name:''
    };
    $scope.dropzoneConfig = {
      uploadMultiple:false,
      autoProcessQueue: false,
      addRemoveLinks: true,
      parallelUploads: 3,
      maxFileSize: 30,
      maxFiles:3,
      acceptedFiles: 'image/*'
    };

    $scope.Init = function(){
      $scope.getImages();
    };

    $scope.getImages = function(){
      DataDelegate.images().success(function(d){
        $scope.images = d;
        console.log("Images",$scope.images);
      }).error(function(){
           cache.toast("Unsuccessful","Failed to retrieve images.","error");
        });
    };

    $scope.UploadComplete = function(){
      $scope.active_content = {
        name:''
      };
      $scope.getImages();
    };

    $scope.$watchCollection('rootScope.dropzone.files',function(files){
      $scope.current.files = !_.isUndefined(files) ? files.length : 0;
    });

    $scope.Upload = function(){
      $rootScope.dropzone.processQueue();
    };

    $scope.ClearAll = function(){
      _.each($scope.images,function(image){
        DataDelegate.images(image._id,null,"DELETE").success(function(){
          cache.toast("Successful","All images were cleared.");
        }).error(function(){
            cache.toast("Unsuccessful","Failed to retrieve images.","error");
          });
      });
      $scope.getImages();
    };

    $scope.Delete = function(id){
      DataDelegate.images(id,null,"DELETE").success(function(){
        cache.toast("Successful","Image was removed.");
      }).error(function(){
          cache.toast("Unsuccessful","Failed to delete image.","error");
        });
    };

    $scope.SaveTag = function(label){
      DataDelegate.tags(undefined,{label:label},"POST").success(function(){
        cache.toast("Successful", "Tag has been added.");
        DataDelegate.tags().then(function(t){
          cache.tags = t;
        });
      })
        .error(function(){
          cache.toast("Unsuccessful", "Tag could not be saved.",'error');
        });
    }

  });
