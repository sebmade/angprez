'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('angprez e2e tests', function() {

  beforeEach(function() {
    browser().navigateTo('index.html');
  });


  it('should have right title when click next', function() {
    expect(element('h1.title2').text()).toMatch("AngularJS");
    element("#next").click();
    expect(element('h1.title').text()).toMatch("c'est quoi le problème ?");
  });


});
