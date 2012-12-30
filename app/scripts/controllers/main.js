'use strict';

angprezApp.controller('MainCtrl', function($scope, $document, $http, $log) {
  $scope.slides = [];
  $http.get("/data/slides.json").success(function(data) {
    $scope.slides = data;
  }).error(function(data) {
    $log.error("unable to retrieve slides : "+data);
  });
  $scope.slideIndex = 0;
  $scope.nextSlide = function() {
    $scope.slideIndex++;
  };
  $scope.previousSlide = function() {
    $scope.slideIndex--;
  };
  $scope.currentSlide = function() {
    if ($scope.slides[$scope.slideIndex]) {
      return $scope.slides[$scope.slideIndex].content;
    }
    return null;
  };
  $scope.gotoSlide = function(s) {
    $scope.slideIndex = $scope.slides.indexOf(s);
  };
  $scope.isFile = function() {
    if ($scope.currentSlide()) {
      return $scope.currentSlide().indexOf(".html") != -1;
    }
    return false;
  };
  $scope.addSlide = function(t, c) {
    $scope.slides.push({
      title : t,
      content : c
    });
  };
  $document.keydown(function(event) {
    if (event.keyCode == 37) {
      $scope.previousSlide();
      $scope.$apply();
    } else if (event.keyCode == 39) {
      $scope.nextSlide();
      $scope.$apply();
    }
  });
});
