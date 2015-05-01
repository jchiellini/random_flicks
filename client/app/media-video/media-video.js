'use strict';

angular.module('randomFlicksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('media-video', {
        url: '/media/:id',
        templateUrl: 'app/media-video/media-video.html',
        controller: 'MediaVideoCtrl'
      });
  });