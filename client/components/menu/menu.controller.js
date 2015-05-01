'use strict';

angular.module('randomFlicksApp')
  .controller('MenuCtrl', function ($scope, cache,constants,Auth,$location) {
    $scope.cache = cache;
    $scope.constants = constants;

//    $scope.isLoggedIn = Auth.isLoggedIn;
//    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.menu = [
      {
        'title': 'HOME',
        'link': '/'
      },
//      {
//        'title': 'Gallery',
//        'link': '#gallery'
//      }
    ];

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
      cache.ToggleMenu(false);
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.sections = [
      {
        id:"home",
        label:"Home"
      },
      {
        id:"events",
        label:"Events"
      },
      {
        id:"about",
        label:"About"
      }
    ];

    $scope.Navigate = function(path){
      $location.path(path);
      cache.ToggleMenu(false);
    };

    $scope.ScrollTo = function(id){
      $(window).scrollTo( $("#"+id), 800 );
      cache.ToggleMenu(false);
    };

  });