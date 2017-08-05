(function (angular) {
    'use strict';
    angular.module('about', []) 
        .component('aboutComponent', {
            templateUrl: '/ClientApp/about-component.html',
            bindings: { $router: '<' },
            controller: ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
                var $ctrl = this;
                $ctrl.aboutMessage = 'This is angular 1 component site';
            }]
        });   
    
})(window.angular);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/