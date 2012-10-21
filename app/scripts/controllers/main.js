'use strict';

angprezApp.controller('MainCtrl', function($scope, $http, $log) {
  $http.get("/data/slides.json").success(function(data) {
    $scope.slides = data;
  }).error(function(data) {
      $log.error("unable to retrieve slides : "+data);
    })
  $scope.addSlide = function(t, c) {
    $scope.slides.push({
      title : t,
      content : c
    });
  }
});
