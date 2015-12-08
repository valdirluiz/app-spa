'use strict';


angular.module('spaTestApp')
  .controller('AlgoritmoCtrl', function ($scope, CombinacoesFactory) {
    
  	$scope.processar = function(){
      $scope.arrayPalavas = $scope.palavra.split(' ');

  		$scope.resultado = CombinacoesFactory.combina($scope.arrayPalavas, $scope.numero);

  	};  
     
  });
