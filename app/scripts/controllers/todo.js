'use strict';

/**
 * @ngdoc function
 * @name inZeitApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the inZeitApp
 */
angular.module('inZeitApp')
  .controller('TodoCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];
    $scope.$watch('todos',function() {
        localStorageService.set('todos',$scope.todos);
    }, true);
    $scope.todo = '';
    $scope.addTodo = function () {
    	if (!$scope.todo) {
    		return;
    	}
    	if ($scope.todos.indexOf($scope.todo) !== -1) {
    		return;
    	}
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
    $scope.removeTodo = function (index) {
    	$scope.todos.splice(index,1);
    };
  });
