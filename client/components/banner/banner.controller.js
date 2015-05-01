'use strict';

angular.module('randomFlicksApp')
  .controller('BannerCtrl', function ($scope, $location, Auth, constants, cache) {
    $scope.constants = constants;
    $scope.Auth = Auth;
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.cache = cache;

  });