(function() {
	'use strict';

	angular
		.module('app.login')
		.controller('LoginController', LoginController);


	LoginController.$inject = ['LoginService'];
	function LoginController (LoginService) {
		var vm = this;
		vm.email = '';
		vm.password = '';

		vm.login  = LoginService.login().then(function(data) {
			vm.token = data;
			return vm.data;
		})
	}
});