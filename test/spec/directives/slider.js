'use strict';

describe('Directive: slider', function() {
  beforeEach(module('angprezApp'));

  beforeEach(module('views/main.html'));

  var element;

  beforeEach(inject(function($rootScope, $compile, $httpBackend) {
    $httpBackend.when("GET", "/data/slides.json").respond([{title: "test", content: "slide0.html"}]);
    $httpBackend.when("GET", "slide0.html").respond('<div id="slide0">test</div>');
    element = angular.element('<slider slides="/data/slides.json"></slider>');
    element = $compile(element)($rootScope);
    $rootScope.$digest();
    $httpBackend.flush();
  }));

  it('should show title', function() {
    expect(element.find('div div img').attr("src")).toBe('images/AngularJS-Shield-small.png');
    expect(element.find('#slide0').text()).toBe('test');
  });
});
