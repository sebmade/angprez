angular.module("views/main.html", []).run(function($templateCache) {
  $templateCache.put("views/main.html",
    "<div class=\"slide\">" +
    "    <a ng-click=\"previousSlide()\">" +
    "        <div class=\"left-triangle\"></div>" +
    "    </a>" +
    "    <div class=\"header\">" +
    "        <img src=\"images/AngularJS-Shield-small.png\" class=\"logo\">" +
    "" +
    "        <h1 class=\"title\">{{slides[slideIndex].title}}</h1>" +
    "    </div>" +
    "    <div ng-include=\"currentSlide()\" ng-show=\"isFile()\"></div>" +
    "    <div class=\"container\" ng-bind-html-unsafe=\"currentSlide()\" ng-hide=\"isFile()\"></div>" +
    "    <a ng-click=\"nextSlide()\">" +
    "        <div class=\"right-triangle\"></div>" +
    "    </a>" +
    "            <span class=\"slideNo\">" +
    "                <span>{{slideIndex+1}}</span> / <span>{{slides.length}}</span>" +
    "            </span>" +
    "</div>" +
    "");
});
