'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(
        [          '$rootScope', '$state', '$stateParams',
            function ($rootScope,   $state,   $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        [          '$stateProvider', '$urlRouterProvider',
            function ($stateProvider,   $urlRouterProvider) {

                $urlRouterProvider
                    .otherwise('/app/dashboard-v1');
                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'tpls/app.html'
                    })
                    .state('app.dashboard-v1', {
                        url: '/dashboard-v1',
                        templateUrl: 'tpls/app_dashboard-v1.html',
                        controller:"dashboard1_main"
                    }).state('app.mail',{
                    url:'tpls/mail.html',
                    templateUrl:"tpls/mail.html",
                    resolve:{
                        deps:['uiLoad',function (uiLoad) {
                               return uiLoad.load(
                                   ['js/app/mail/mail.js',
                                   'js/app/mail/mail-service.js',])
                        }]
                    }
                })
                    .state('app.mail.list',{
                        url:'/inbox/{fold}',
                        templateUrl:"tpls/mail.list.html"
                })
                    .state('app.mail.detail',{
                        url:'/{mailId:[0-9]{1,4}}',
                        templateUrl:"tpls/mail.detail.html"
                    }).state('apps',{
                        abstract:true,
                        templateUrl:'tpls/layout.html'
                }).state('apps.note',{
                    url:'/note',
                    templateUrl:'tpls/apps_note.html',
                    resolve:{
                        deps:["uiLoad",function (uiLoad) {
                           return uiLoad.load(['js/app/note/note.js',
                               'vendor/libs/moment.min.js'])
                        }]
                    }
                }).state('apps.contact',{
                    url:'/contact',
                    templateUrl:'tpls/apps_contact.html',
                    resolve:{
                        deps:["uiLoad",function (uiLoad) {
                            return uiLoad.load(['js/app/contact/contact.js',
                              ])
                        }]
                    }
                }).state('layout',{
                    abstract:true,
                    url:'/layout',
                    templateUrl:'tpls/layout.html'
                }).state('layout.app',{
                    url:'/app',
                    templateUrl:'tpls/layout_app.html',
                    resolve:{deps:['uiLoad',function (uiLoad) {
                        return  uiLoad.load(['js/controller/tab.js'])
                    }]}
                }).state('layout.mobile',{
                    url:'/mobile',
                    templateUrl:'tpls/layout_mobile.html',
                })
                    .state('app.page.profile',{
                        url:'/profile',
                    templateUrl:"tpls/page_profile.html",

                })
                    .state('app.ui',{
                        url:'/ui',
                        template:'<div ui-view class="fade-in-up"><div></div>'
                    }).state('app.ui.buttons',{
                    url:'/buttons',
                    templateUrl:"tpls/ui_buttons.html",
                })

        }
        ]
    );