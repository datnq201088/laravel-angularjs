(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('ShareService', ShareService);


	function ShareService() {

	 return {
	 	data: {
	 		firstname: 'Firstname ',
	 		lastname: 'Lastname'
	 	},
	 	update: function(data) {
	 		this.data = data;
	 	}
	 }

	}
})();