(function (angular) {
    'use strict';
    angular.module('app', ['ngComponentRouter', 'test', 'another','about'])

    .config(function ($locationProvider) {
      //  $locationProvider.html5Mode(true);
    })

    .value('$routerRootComponent', 'app')

    .component('app', {
        templateUrl: '/ClientApp/app.html',
        $routeConfig: [
          { path: '/Test', name: 'Test', component: 'testComponent', useAsDefault: true },
          { path: '/Another', name: 'Another', component: 'anotherComponent' }
      
        ]
    });
})(window.angular);