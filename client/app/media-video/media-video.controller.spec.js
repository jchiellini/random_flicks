'use strict';

describe('Controller: MediaVideoCtrl', function () {

  // load the controller's module
  beforeEach(module('randomFlicksApp'));

  var MediaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MediaCtrl = $controller('MediaVideoCtrl', {
      $scope: scope
    });
  }));

//  it('should ...', function () {
//    expect(1).toEqual(1);
//  });
});
