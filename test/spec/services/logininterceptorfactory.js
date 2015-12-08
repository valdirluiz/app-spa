'use strict';

describe('Service: LoginInterceptorFactory', function () {

  // load the service's module
  beforeEach(module('spaTestApp'));

  // instantiate service
  var LoginInterceptorFactory;
  beforeEach(inject(function (_LoginInterceptorFactory_) {
    LoginInterceptorFactory = _LoginInterceptorFactory_;
  }));

  it('should do something', function () {
    expect(!!LoginInterceptorFactory).toBe(true);
  });

});
