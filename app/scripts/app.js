(function () {
  'use strict';

  function gApiRun(GAuth, GApi){
    var CLIENT = '696007001059-5qa1016iehl670ckcda6fn9ushiqnhq9.apps.googleusercontent.com';
    var BASE = 'https://myGoogleAppEngine.appspot.com/_ah/api';
    GApi.load('ProvaSPA','v1',BASE);
    GAuth.setClient(CLIENT);
  }

  function configura($routeProvider){
    $routeProvider
        .when('/', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'login'
        })
        .when('/algoritmo', {
          templateUrl: 'views/algoritmo.html',
          controller: 'AlgoritmoCtrl',
          controllerAs: 'algoritmo'
        })
        .when('/perfil', {
          templateUrl: 'views/meuperfil.html'
        })
        .otherwise({
          redirectTo: '/'
        });
  }

angular.module('spaTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'angular-google-gapi'
  ])
.config(['$routeProvider', configura])
.run(['GAuth', 'GApi', gApiRun]);

})();