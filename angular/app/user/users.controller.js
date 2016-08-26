(function () {
	'use strict';
	angular
		.module('app.user')
		.controller('UsersController', UsersController);

	UsersController.$inject = ['$localStorage'];

	function UsersController ($localStorage) {
	    var vm = this;
	}
})();