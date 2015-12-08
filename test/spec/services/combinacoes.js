'use strict';

describe('Service: combinacoes', function () {

  // load the service's module
  beforeEach(module('spaTestApp'));

  // instantiate service
  var combinacoes;
  beforeEach(inject(function (_combinacoes_) {
    combinacoes = _combinacoes_;
  }));

  it('should do something', function () {
    expect(!!combinacoes).toBe(true);
  });

});
