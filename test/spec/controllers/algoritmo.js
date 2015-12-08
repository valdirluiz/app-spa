'use strict';

describe('Controller: AlgoritmoCtrl', function () {

  // load the controller's module
  beforeEach(module('spaTestApp'));

  var AlgoritmoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlgoritmoCtrl = $controller('AlgoritmoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AlgoritmoCtrl.awesomeThings.length).toBe(3);
  });
});
