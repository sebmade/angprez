'use strict';

angprezApp.controller('MainCtrl', function($scope, $document, $routeParams, $location) {
  $scope.slideIndex = parseInt($routeParams.index);
  $scope.nextSlide = function() {
    $scope.slideIndex++;
    $location.path("/"+$scope.slideIndex);
  };
  $scope.previousSlide = function() {
    $scope.slideIndex--;
    $location.path("/"+$scope.slideIndex);
  };
  $scope.currentSlide = function() {
    return "slide"+$scope.slideIndex+".html";
  }
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
