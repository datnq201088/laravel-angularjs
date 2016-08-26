(function () {
	'use strict';

	angular
		.module('app.user')
		.config(config);

    
	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/landing');

		$stateProvider
			.state('users', {
				url: '/users',
				abstract: true,
				templateUrl: 'views/app/user/users.html',
				controller: 'UsersController',
				controllerAs: 'vm'
			})
			.state('users.add', {
				url: '/add',
				templateUrl: 'views/app/user/user-add.html',
				controller: 'UserAddController',
				controllerAs: 'vm'
			})
			.state('users.list', {
				 url: '',
				 templateUrl: 'views/app/user/user-list.html',
				 controller: 'UserListController',
				 controllerAs: 'vm'
			})
			.state('users.detail', {
				url:'/detail/:id',
				templateUrl: 'views/app/user/user-detail.html',
				controller: 'UserDetailController',
				controllerAs: 'vm'
			});

	}
})();