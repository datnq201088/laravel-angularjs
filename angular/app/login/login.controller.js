(function() {
	'use strict';

	angular
		.module('app.login')
		.controller('LoginController', LoginController);


	LoginController.$inject = ['$state', '$http', 'AuthService'];
	function LoginController ($state, $http,  AuthService) {
		var vm = this;
		vm.email = '';
		vm.password = '';
		vm.login  = login;

		function login() {
			AuthService
					.login(vm.email, vm.password)
					.then(
						function(data, status, headers, config) {
							console.log('2');
							if (AuthService.isAuthenticated)
							    return $state.go('users.list');
						},
						function (error) {
							alert(error);
						}
					);
		};

	}
})();