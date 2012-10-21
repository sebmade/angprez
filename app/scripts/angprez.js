'use strict';

// Declare app level module which depends on filters, and services
var angprezApp = angular.module('angprezApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/:index', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/0'
      });
  }]);
