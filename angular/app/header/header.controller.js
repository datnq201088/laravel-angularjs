(function() {
	'use strict';

	angular
		.module('app.header')
		.controller('HeaderController', HeaderController);

	HeaderController.$inject = ['AuthService'];
	function HeaderController (AuthService) {

		var vm = this;
		vm.currentUser = AuthService.currentUser;
		console.log(vm.currentUser);

		vm.logout = logout;

		function logout() {
			AuthService.logout();
			$statel.go('landing');
		}
	}
})();