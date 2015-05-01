'use strict';

angular.module('randomFlicksApp')
  .service('constants', function (cache,Auth) {

    var constants = {};

    constants.navigation = {
      left:[
        {
          'title': 'HOME',
          'link': '/',
          'click': cache.GoToPage,
          'visibility':function(){
            return !cache.isActive("/");
          }
        },
        {
          'title': 'MEDIA',
          'link': '/media',
          'click': cache.GoToPage,
          'visibility':function(){
            return true;
          }
        },
        {
          'title': 'SHOP',
          'link': '/shop',
          'click': cache.GoToPage,
          'visibility':function(){
            return true;
          }
        },
        {
          'title': 'EVENTS',
          'link': '#events',
          'click': cache.ScrollTo,
          'visibility':function(){
            return cache.isActive("/");
          }
        },
        {
          'title': 'ABOUT',
          'link': '#about',
          'click': cache.ScrollTo,
          'visibility':function(){
            return cache.isActive("/");
          }
        }
      ],
      right:[
        {
          'title': 'LOGIN',
          'link': '/login',
          'click': cache.GoToPage,
          'visibility':function(){
            return !Auth.isLoggedIn();
          }
        },
        {
          'title': '<span class="glyphicon glyphicon-cog"></span>',
          'link': '/settings',
          'click': cache.GoToPage,
          'visibility':function(){
            return Auth.isLoggedIn();
          }
        },
        {
          'title': 'MANAGE',
          'link': '/manage',
          'click': cache.GoToPage,
          'visibility':function(){
            return Auth.isAdmin();
          }
        },
        {
          'title': 'USERS',
          'link': '/users',
          'click': cache.GoToPage,
          'visibility':function(){
            return Auth.isAdmin();
          }
        },
        {
          'title': 'LOGOUT',
          'link': '/logout',
          'click': cache.logout,
          'visibility':function(){
            return Auth.isLoggedIn();
          }
        }
      ]
    };

    return constants;

  });
