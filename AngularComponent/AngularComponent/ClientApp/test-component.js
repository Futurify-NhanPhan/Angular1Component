(function (angular) {
    'use strict';
    angular.module('test', []) 
        .component('testComponent', {
            template:
              '<h2>{{$ctrl.textMessage}}</h2>',
            bindings: { $router: '<' },
            controller: ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
                var $ctrl = this;
                $ctrl.textMessage = 'Hello everyone!';               
            }]
        });   
    
})(window.angular);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/