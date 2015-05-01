'use strict';

angular.module('randomFlicksApp')
  .controller('EventsCtrl', function ($scope, $location, Auth, constants, DataDelegate, $timeout) {
    $scope.constants = constants;
    $scope.slots = [];

    $scope.Init = function(){

//      DataDelegate.getMedia().then(function(d){
//        $scope.videos = d;
//        $scope.slots = _.chain(d).sample(10).shuffle().value();
//        console.log("Slots",$scope.slots);
//
//
//
//      });
      $scope.slots = _.chain(constants.media).sample(10).shuffle().value();
      $timeout(function(){
        $('.slot').jSlots({
          number:1,
          spinner : '#playBtn',
          winnerNumber : 7,
          onEnd : $scope.showFlick
        });
      },100);
    };

    $scope.showFlick = function(numbers){
     console.log($scope.slots[numbers[0]-1].title.$t);
    };

    $scope.events = [
      {
        date:moment().format("M-DD-YYYY"),
        city:"Jersey City, NJ",
        location:"White Star Inn",
        description:"Testing"
      }

    ];

  });