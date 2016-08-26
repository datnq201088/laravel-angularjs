(function() {
	'use strict';

	angular
		.module('app.chat')
		.factory('ChatService', ChatService);

	ChatService.$inject =  ['$http', '$localStorage'];

	function ChatService($http, $localStorage) {
		var chatService = {
			// login: login
		};
		return chatService;

		// function login (email, password) {
		// 	return $http.post('/api/v1/authenticate', {email: email, password: password});
		// }

		
	}
})();