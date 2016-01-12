'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('inZeitApp'));

  var MainCtrl,
    scope, localStorageService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    localStorageService = jasmine.createSpyObj('localStorageService',['get']);
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      localStorageService: localStorageService
      // place here mocked dependencies
    });
  }));

  it('should have no items to start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list', function() {
    scope.todo = 'Test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should add then remove an item from the list', function() {
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });

  it('should fetch todos from localStorageService', function() {
    expect(localStorageService.get).toHaveBeenCalled();
  });
  
});
