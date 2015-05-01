'use strict';

angular.module('randomFlicksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve:{
          media:function(constants, DataDelegate){
            if(!constants.media){
              DataDelegate.getMedia().then(function(d){
                constants.media = d;
              });
            }
          }
        }
      });
  });