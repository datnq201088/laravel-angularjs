(function(){
"use strict";

var app = angular.module('app',
        [
        'app.core',

        'app.login',
        'app.landing'
        ]);
    
    angular.module('app.core', ['ui.router', 'ngMaterial', 'restangular']);
    })();