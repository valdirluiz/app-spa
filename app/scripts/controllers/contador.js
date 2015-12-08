'use strict';


angular.module('spaTestApp')
  .controller('ContadorCtrl', function ($scope, ContadorFactory) {
  	 $scope.tempo = new ContadorFactory();
  });
