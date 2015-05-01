'use strict';

angular.module('randomFlicksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shop', {
        url: '/shop',
        templateUrl: 'app/shop/shop.html',
        controller: 'ShopCtrl'
      });
  });