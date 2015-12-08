'use strict';

describe('Service: ContadorFactory', function () {

  // load the service's module
  beforeEach(module('spaTestApp'));

  // instantiate service
  var ContadorFactory;
  beforeEach(inject(function (_ContadorFactory_) {
    ContadorFactory = _ContadorFactory_;
  }));

  it('should do something', function () {
    expect(!!ContadorFactory).toBe(true);
  });

});
