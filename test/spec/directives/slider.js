'use strict';

describe('Directive: slider', function() {
  beforeEach(module('angprezApp'));

  var element;

  beforeEach(module('views/main.html'));

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<slider></slider>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('');
  }));
});
