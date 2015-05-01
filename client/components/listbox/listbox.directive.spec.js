'use strict';

describe('Directive: listbox', function () {

  // load the directive's module and view
  beforeEach(module('ccApp'));
  beforeEach(module('app/components/listbox/listbox.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<listbox></listbox>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the listbox directive');
  }));
});