'use strict';

angprezApp.directive('slider', function($document) {
  return {
    templateUrl: 'views/main.html',
    restrict: 'E',
    controller: 'MainCtrl'
  };
});
