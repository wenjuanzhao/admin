'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {
          $urlRouterProvider.otherwise('/app');
          $stateProvider.state('app',{
              url:"/app",
              templateUrl:'tpls/app.html'
          })
      }
    ]
  );