(function() {
	'use strict';
	angular
		.module('app.user')
		.factory('UserService', UserService);

	UserService.$inject = ['$http', '$localStorage'];

	function UserService($http, $localStorage) {

		var userService = {
			getUserInfo: getUserInfo,
			getList: getList,
			deleteUser: deleteUser,
			addUser: addUser
		};

		return userService;


		function getUserInfo(userId) {
			return $http.get('/api/v1/users/'  + userId);
						
		}

		function getList() {
			return $http.get('/api/v1/users');
		}

		function deleteUser(userId) {
			return $http.delete('/api/v1/users/' + userId);
		}

		function addUser(params) {
			return $http.post('/api/v1/users', params);
		}
	}
})();