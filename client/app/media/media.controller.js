'use strict';

angular.module('randomFlicksApp')
  .controller('MediaCtrl', function ($scope, DataDelegate, cache,youtubeEmbedUtils,$location) {
    $scope.cache = cache;
    $scope.selected = {};
    $scope.search = {"snippet":{"title":""}};

    $scope.sort_options = [
      {
        id:"-snippet.publishedAt",
        label:"Date"
      },
      {
        id:"snippet.title",
        label:"Title"
      },
      {
        id:"-statistics.viewCount",
        label:"Views"
      }
    ];

    $scope.Init = function(){
      DataDelegate.getMedia().then(function(d){
        console.log(d);
        $scope.media = d.items;
        $scope.nextPageToken = d.nextPageToken;
      });
    };

    $scope.convertTime = function(time){
      return moment(time).fromNow();
    };

    $scope.LoadMore = function(){
      if($scope.nextPageToken){
        DataDelegate.getMedia($scope.nextPageToken).then(function(d){
          console.log(d);
          $scope.media = _.union($scope.media, d.items);
          $scope.nextPageToken = d.nextPageToken;
        });
      }
    };

    $scope.NavigateToVideo = function(item){
      $location.path('/media/'+youtubeEmbedUtils.getIdFromURL(item.link[2].href));
    };

  });
