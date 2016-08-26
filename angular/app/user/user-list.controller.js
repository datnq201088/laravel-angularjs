(function () {
	'use strict';
	angular
		.module('app.user')
		.controller('UserListController', UserListController);

	UserListController.$inject = ['$state', '$localStorage', 'UserService'];

	function UserListController ($state, $localStorage, UserService) {
	    var vm = this;
	    vm.users = [];
	    vm.error = '';
	    vm.loaded = false;

	    vm.deleteUser = deleteUser;
	    vm.addUser = redirectAddPage;

	    getList();

	    function getList() {

	    	if (vm.loaded)
	    		return false;

	    	vm.loaded = true;

	    	return UserService.getList().then(function(data) {
	    		var res = data.data;
	    		if (res.status) {
		    		vm.users = res.data;
	    		} else {
	    			vm.error = res.mesage;
	    		}
	    	});
	    }

	    function deleteUser(index) {
	    	var id = vm.users[index].id;
	    	return UserService.deleteUser(id).then(function(data) {
	    		var res = data.data;
	    		if (res.status) {
	    			alert('Delete success');
	    			delete vm.users[index];
	    		}
	    		return vm.users;
	    	})
	    }

	    function redirectAddPage() {
	    	return $state.go('users.add');
	    }






	}
})();