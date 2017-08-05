(function (angular) {
    'use strict';
    angular.module('another', []) 
        .component('anotherComponent', {
            templateUrl: '/ClientApp/another-component.html',
            bindings: { $router: '<' },
            controller: ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
                var $ctrl = this;
            }]
        });   
    
})(window.angular);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/