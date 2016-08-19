(function() {
	'use strict';

	angular
		.module('app.login')
		.factory('LoginService', LoginService);

	LoginService.$inject =  ['$http'];

	function LoginService($http) {
		var loginService = {
			login: login
		};


		function login () {
			return true;
		}

		return loginService;
	}
});