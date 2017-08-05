(function (angular) {
    'use strict';
    angular.module('app', ['ngComponentRouter', 'test'])

    .config(function ($locationProvider) {
      //  $locationProvider.html5Mode(true);
    })

    .value('$routerRootComponent', 'app')

    .component('app', {
        template:
          '<nav>\n' +
          '  <a ng-link="[\'Test\']">Go to test page</a>\n' +
          '</nav>\n' +
          '<ng-outlet></ng-outlet>\n',
        $routeConfig: [
          { path: '/test', name: 'Test', component: 'testComponent', useAsDefault: true },
      
        ]
    });
})(window.angular);