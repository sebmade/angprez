'use strict';

angprezApp.directive('slider', function($document) {
  return {
    templateUrl: 'views/main.html',
    restrict: 'E',
    link: function postLink($scope, element, attrs) {
      $scope.slideIndex = 0;
      $scope.nextSlide = function() {
        $scope.slideIndex++;
      };
      $scope.previousSlide = function() {
        $scope.slideIndex--;
      };
      $scope.currentSlide = function() {
        return $scope.slides[$scope.slideIndex].content;
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
    }
  };
});
