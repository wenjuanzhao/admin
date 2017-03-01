'use strict';

/* Controllers */

angular.module('app')
  .controller('AppCtrl', ["$scope","$translate","$localStorage","$window",function ($scope,$translate,$localStorage,$window) {
      $scope.app={
          name:"Angular",
          version: '1.3.3',
          // for chart colors
          color: {
              primary: '#7266ba',
              info:    '#23b7e5',
              success: '#27c24c',
              warning: '#fad733',
              danger:  '#f05050',
              light:   '#e8eff0',
              dark:    '#3a3f51',
              black:   '#1c2b36'
          },
          settings: {
              themeID: 1,
              navbarHeaderColor: 'bg-black',
              navbarCollapseColor: 'bg-white-only',
              asideColor: 'bg-black',
              headerFixed: true,
              asideFixed: false,
              asideFolded: false,
              asideDock: false,
              container: false
          }
      }
      //判断给定的对象是否定义过。
      if ( angular.isDefined($localStorage.settings) ) {
          $scope.app.settings = $localStorage.settings;
      } else {
          $localStorage.settings = $scope.app.settings;
      }
      $scope.$watch('app.settings', function(){
          if( $scope.app.settings.asideDock  &&  $scope.app.settings.asideFixed ){
              // aside dock and fixed must set the header fixed.
              $scope.app.settings.headerFixed = true;
          }
          // save to local storage
          $localStorage.settings = $scope.app.settings;
      }, true);

      // angular translate
      $scope.lang = { isopen: false };
      $scope.langs = {en:'English', de_DE:'German', it_IT:'Italian'};
      $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
      $scope.setLang = function(langKey, $event) {
          // set the current lang
          $scope.selectLang = $scope.langs[langKey];
          // You can change the language during runtime
          $translate.use(langKey);
          $scope.lang.isopen = !$scope.lang.isopen;
      };
  }]);