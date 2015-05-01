'use strict';

angular.module('randomFlicksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manage', {
        url: '/manage',
        templateUrl: 'app/manage/manage.html',
        controller: 'ManageCtrl',
        resolve:{
//          properties:  function(DataDelegate){
//            return DataDelegate.getProperties().then(function (data) {
//              return data;
//            });
//          }
        }
      });
  });