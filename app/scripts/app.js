'use strict';

/**
 * @ngdoc overview
 * @name inZeitApp
 * @description
 * # inZeitApp
 *
 * Main module of the application.
 */
angular
  .module('inZeitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');    
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        activeTab: 'main'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl',
        controllerAs: 'todo',
        activeTab: 'todo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
