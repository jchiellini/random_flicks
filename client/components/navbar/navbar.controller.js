'use strict';

angular.module('randomFlicksApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, constants) {
    $scope.constants = constants;
    $scope.Auth = Auth;
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.Init = function(){




//      $document.bind('scroll', function() {
//        var navHeight = $document.height() - 70;
//        console.log(navHeight);
//
//        if ($document.scrollTop() > navHeight) {
//          $('nav').addClass('fixed');
//        }
//        else {
//          $('nav').removeClass('fixed');
//        }
//      });
//
//      console.log($(window));

    };



  });