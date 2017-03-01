// config

var app =
angular.module('app')
  .config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {

        //实现控制器的动态加载
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
    }
  ])
  .config(['$translateProvider', function($translateProvider){

      $translateProvider.useStaticFilesLoader({
          prefix: 'language/',
          suffix: '.js'
      });
      // 默认的语言
      $translateProvider.preferredLanguage('en');
      //模型可以使用local storge
      $translateProvider.useLocalStorage();
  }]);