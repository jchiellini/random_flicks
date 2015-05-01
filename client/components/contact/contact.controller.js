'use strict';

angular.module('randomFlicksApp')
  .controller('ContactCtrl', function ($scope, cache) {
    $scope.cache = cache;

    $scope.Send = function(){
      cache.email(
        "contact",
        "Message from RandomFlicks.com",
        $scope.form,
        function(){
          cache.toast("Success","Your email has been sent.");
          cache.isContactOpen = false;
          $scope.form = {
            name:'',
            email:'',
            message:''
          };
        },
        function(){
          cache.toast("Unsuccessful","Your email has failed to send. Sorry for the inconvenience. You may contact info@randomflick.com through your preferred email service.","error");
        });
    };

  });