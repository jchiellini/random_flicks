'use strict';

angular.module('randomFlicksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('media', {
        url: '/media',
        templateUrl: 'app/media/media.html',
        controller: 'MediaCtrl'
      });
  });