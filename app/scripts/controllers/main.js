'use strict';

angprezApp.controller('MainCtrl', function ($scope, $document) {
  $scope.slideIndex = 0;
  $scope.nextSlide = function () {
    $scope.slideIndex++;
  };
  $scope.previousSlide = function () {
    $scope.slideIndex--;
  };
  $scope.currentSlide = function () {
    return "slide" + $scope.slideIndex + ".html";
  }
  $document.keydown(function (event) {
    if (event.keyCode == 37) {
      $scope.previousSlide();
      $scope.$apply();
    } else if (event.keyCode == 39) {
      $scope.nextSlide();
      $scope.$apply();
    }
  });
});
