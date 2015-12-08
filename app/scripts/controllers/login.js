(function () {
  'use strict';

function loginCtrl($scope, $location, GAuth) {


	$scope.doSingup = function() {
		console.log(GAuth);
    	GAuth.login().then(onSuccess,onError);
	};

	$scope.doSinOut = function() {
    	GAuth.setToken(null);
    	GAuth.logout().then(onSuccessLogOut,onError);
	};

	function onSuccessLogOut(){
		$location.path('/');
		console.log('deslogou');
	}

	function onSuccess(){
		console.log('Usuario logado');
		$location.path('/algoritmo');	 
	}

	function onError(){
		console.log('deu errado');
	}

}

angular
    .module('spaTestApp')
    .controller('LoginCtrl', ['$scope', '$location', 'GAuth', loginCtrl]);


})();