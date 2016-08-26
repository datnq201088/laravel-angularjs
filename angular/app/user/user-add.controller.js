(function () {
	'use strict';
	angular
		.module('app.user')
		.controller('UserAddController', UserAddController);

	UserAddController.$inject = ['$state', 'UserService'];

	function UserAddController ($state, UserService) {
		var vm = this;
		vm.user = {email: '', name: '', password: ''};

		vm.addUser = addUser;

		function addUser() {
			UserService.addUser(vm.user).then(function (data) {	
				var res = data.data;
				if (res.status) {
					$state.go('users.list');
				}

			}, function (error) {

			});
		}

	}
})();