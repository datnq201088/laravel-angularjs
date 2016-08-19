angular
	.module('app')
	.config(configure);

function configure() {
	
}

angular
	.module('app')
	.run(runBlock);

// runBlock.$inject = [];

function runBlock() {

}
(function(){
"use strict";

var app = angular.module('app',
        [
        'app.core',

        'app.login',
        'app.landing'
        ]);
    
    angular.module('app.core', ['ui.router', 'ngMaterial', 'restangular']);
    })();

(function(){
    "use strict";

    angular.module('app.config').config( ["$mdThemingProvider", function($mdThemingProvider) {
        /* For more info, visit https://material.angularjs.org/#/Theming/01_introduction */
        $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('cyan')
        .warnPalette('red');
    }]);

})();

(function() {
	'use strict';

	angular
		.module('app.landing')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('landing', {
				url: "/landing",
				templateUrl: "views/app/landing/landing.html",
				controller: "LandingController",
				controllerAs: "vm"
			})
	}
});
(function () {
	'use strict';

	angular.module('app.landing')
		.controller('LandingController', LandingController);

	LandingController.$inject = [];
	function LandingController() {
		var vm = this;
	}
});
(function() {
	'use strict';

	angular
		.module('app.landing', ['app.core']);
});
(function () {
	'use strict';

	config.$inject = ["$stateProvider", "$urlRouterProvider"];
	angular
		.module('app.login')
		.config(config);

	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/landing");

		$stateProvider
			.state('login', {
				url: "/login",
				templateUrl: "views/app/login/login.html",
				controller: "LoginController",
				controllerAs: "vm"		
		})
	}
});
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
 angular.module('app.login', ['app.core']);
(function() {
	'use strict';

	angular
		.module('app.login')
		.factory('LoginService', LoginService);

	LoginService.$inject =  ['$http'];

	function LoginService($http) {
		var loginService = {
			login: login
		};


		function login () {
			return true;
		}

		return loginService;
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb25maWcuanMiLCJhcHAubW9kdWxlLmpzIiwiY29uZmlnL3RoZW1lLmpzIiwiYXBwL2xhbmRpbmcvbGFuZGluZy5jb25maWcuanMiLCJhcHAvbGFuZGluZy9sYW5kaW5nLmNvbnRyb2xsZXIuanMiLCJhcHAvbGFuZGluZy9sYW5kaW5nLm1vZHVsZS5qcyIsImFwcC9sb2dpbi9sb2dpbi5jb25maWcuanMiLCJhcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qcyIsImFwcC9sb2dpbi9sb2dpbi5tb2R1bGUuanMiLCJhcHAvbG9naW4vbG9naW4uc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLE9BQUE7RUFDQSxPQUFBOztBQUVBLFNBQUEsWUFBQTs7OztBQUlBO0VBQ0EsT0FBQTtFQUNBLElBQUE7Ozs7QUFJQSxTQUFBLFdBQUE7OztBQ2RBLENBQUEsVUFBQTtBQUNBOztBQUVBLElBQUEsTUFBQSxRQUFBLE9BQUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7OztJQUdBLFFBQUEsT0FBQSxZQUFBLENBQUEsYUFBQSxjQUFBOzs7QUNYQSxDQUFBLFVBQUE7SUFDQTs7SUFFQSxRQUFBLE9BQUEsY0FBQSwrQkFBQSxTQUFBLG9CQUFBOztRQUVBLG1CQUFBLE1BQUE7U0FDQSxlQUFBO1NBQ0EsY0FBQTtTQUNBLFlBQUE7Ozs7O0FDUkEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUE7R0FDQSxPQUFBO0dBQ0EsT0FBQTs7Q0FFQSxPQUFBLFVBQUEsQ0FBQSxrQkFBQTtDQUNBLFNBQUEsT0FBQSxnQkFBQSxvQkFBQTtFQUNBO0lBQ0EsTUFBQSxXQUFBO0lBQ0EsS0FBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTs7OztBQ2RBLENBQUEsWUFBQTtDQUNBOztDQUVBLFFBQUEsT0FBQTtHQUNBLFdBQUEscUJBQUE7O0NBRUEsa0JBQUEsVUFBQTtDQUNBLFNBQUEsb0JBQUE7RUFDQSxJQUFBLEtBQUE7OztBQ1JBLENBQUEsV0FBQTtDQUNBOztDQUVBO0dBQ0EsT0FBQSxlQUFBLENBQUE7O0FDSkEsQ0FBQSxZQUFBO0NBQ0E7OztDQUVBO0dBQ0EsT0FBQTtHQUNBLE9BQUE7O0NBRUEsU0FBQSxPQUFBLGdCQUFBLG9CQUFBO0VBQ0EsbUJBQUEsVUFBQTs7RUFFQTtJQUNBLE1BQUEsU0FBQTtJQUNBLEtBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7Ozs7QUNmQSxDQUFBLFdBQUE7Q0FDQTs7Q0FFQTtHQUNBLE9BQUE7R0FDQSxXQUFBLG1CQUFBOzs7Q0FHQSxnQkFBQSxVQUFBLENBQUE7Q0FDQSxTQUFBLGlCQUFBLGNBQUE7RUFDQSxJQUFBLEtBQUE7RUFDQSxHQUFBLFFBQUE7RUFDQSxHQUFBLFdBQUE7O0VBRUEsR0FBQSxTQUFBLGFBQUEsUUFBQSxLQUFBLFNBQUEsTUFBQTtHQUNBLEdBQUEsUUFBQTtHQUNBLE9BQUEsR0FBQTs7OztDQ2hCQSxRQUFBLE9BQUEsYUFBQSxDQUFBO0FDQUEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUE7R0FDQSxPQUFBO0dBQ0EsUUFBQSxnQkFBQTs7Q0FFQSxhQUFBLFdBQUEsQ0FBQTs7Q0FFQSxTQUFBLGFBQUEsT0FBQTtFQUNBLElBQUEsZUFBQTtHQUNBLE9BQUE7Ozs7RUFJQSxTQUFBLFNBQUE7R0FDQSxPQUFBOzs7RUFHQSxPQUFBOztHQUVBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcblx0Lm1vZHVsZSgnYXBwJylcblx0LmNvbmZpZyhjb25maWd1cmUpO1xuXG5mdW5jdGlvbiBjb25maWd1cmUoKSB7XG5cdFxufVxuXG5hbmd1bGFyXG5cdC5tb2R1bGUoJ2FwcCcpXG5cdC5ydW4ocnVuQmxvY2spO1xuXG4vLyBydW5CbG9jay4kaW5qZWN0ID0gW107XG5cbmZ1bmN0aW9uIHJ1bkJsb2NrKCkge1xuXG59IiwiKGZ1bmN0aW9uKCl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLFxuICAgICAgICBbXG4gICAgICAgICdhcHAuY29yZScsXG5cbiAgICAgICAgJ2FwcC5sb2dpbicsXG4gICAgICAgICdhcHAubGFuZGluZydcbiAgICAgICAgXSk7XG4gICAgXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcC5jb3JlJywgWyd1aS5yb3V0ZXInLCAnbmdNYXRlcmlhbCcsICdyZXN0YW5ndWxhciddKTtcbiAgICB9KSgpOyIsIihmdW5jdGlvbigpe1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcC5jb25maWcnKS5jb25maWcoIGZ1bmN0aW9uKCRtZFRoZW1pbmdQcm92aWRlcikge1xuICAgICAgICAvKiBGb3IgbW9yZSBpbmZvLCB2aXNpdCBodHRwczovL21hdGVyaWFsLmFuZ3VsYXJqcy5vcmcvIy9UaGVtaW5nLzAxX2ludHJvZHVjdGlvbiAqL1xuICAgICAgICAkbWRUaGVtaW5nUHJvdmlkZXIudGhlbWUoJ2RlZmF1bHQnKVxuICAgICAgICAucHJpbWFyeVBhbGV0dGUoJ3RlYWwnKVxuICAgICAgICAuYWNjZW50UGFsZXR0ZSgnY3lhbicpXG4gICAgICAgIC53YXJuUGFsZXR0ZSgncmVkJyk7XG4gICAgfSk7XG5cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ2FwcC5sYW5kaW5nJylcblx0XHQuY29uZmlnKGNvbmZpZyk7XG5cblx0Y29uZmlnLiRpbmplY3QgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlciddO1xuXHRmdW5jdGlvbiBjb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuXHRcdCRzdGF0ZVByb3ZpZGVyXG5cdFx0XHQuc3RhdGUoJ2xhbmRpbmcnLCB7XG5cdFx0XHRcdHVybDogXCIvbGFuZGluZ1wiLFxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogXCJ2aWV3cy9hcHAvbGFuZGluZy9sYW5kaW5nLmh0bWxcIixcblx0XHRcdFx0Y29udHJvbGxlcjogXCJMYW5kaW5nQ29udHJvbGxlclwiLFxuXHRcdFx0XHRjb250cm9sbGVyQXM6IFwidm1cIlxuXHRcdFx0fSlcblx0fVxufSk7IiwiKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAubGFuZGluZycpXG5cdFx0LmNvbnRyb2xsZXIoJ0xhbmRpbmdDb250cm9sbGVyJywgTGFuZGluZ0NvbnRyb2xsZXIpO1xuXG5cdExhbmRpbmdDb250cm9sbGVyLiRpbmplY3QgPSBbXTtcblx0ZnVuY3Rpb24gTGFuZGluZ0NvbnRyb2xsZXIoKSB7XG5cdFx0dmFyIHZtID0gdGhpcztcblx0fVxufSk7IiwiKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ2FwcC5sYW5kaW5nJywgWydhcHAuY29yZSddKTtcbn0pOyIsIihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnYXBwLmxvZ2luJylcblx0XHQuY29uZmlnKGNvbmZpZyk7XG5cblx0ZnVuY3Rpb24gY29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL2xhbmRpbmdcIik7XG5cblx0XHQkc3RhdGVQcm92aWRlclxuXHRcdFx0LnN0YXRlKCdsb2dpbicsIHtcblx0XHRcdFx0dXJsOiBcIi9sb2dpblwiLFxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogXCJ2aWV3cy9hcHAvbG9naW4vbG9naW4uaHRtbFwiLFxuXHRcdFx0XHRjb250cm9sbGVyOiBcIkxvZ2luQ29udHJvbGxlclwiLFxuXHRcdFx0XHRjb250cm9sbGVyQXM6IFwidm1cIlx0XHRcblx0XHR9KVxuXHR9XG59KTsiLCIoZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnYXBwLmxvZ2luJylcblx0XHQuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgTG9naW5Db250cm9sbGVyKTtcblxuXG5cdExvZ2luQ29udHJvbGxlci4kaW5qZWN0ID0gWydMb2dpblNlcnZpY2UnXTtcblx0ZnVuY3Rpb24gTG9naW5Db250cm9sbGVyIChMb2dpblNlcnZpY2UpIHtcblx0XHR2YXIgdm0gPSB0aGlzO1xuXHRcdHZtLmVtYWlsID0gJyc7XG5cdFx0dm0ucGFzc3dvcmQgPSAnJztcblxuXHRcdHZtLmxvZ2luICA9IExvZ2luU2VydmljZS5sb2dpbigpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dm0udG9rZW4gPSBkYXRhO1xuXHRcdFx0cmV0dXJuIHZtLmRhdGE7XG5cdFx0fSlcblx0fVxufSk7IiwiIGFuZ3VsYXIubW9kdWxlKCdhcHAubG9naW4nLCBbJ2FwcC5jb3JlJ10pOyIsIihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdhcHAubG9naW4nKVxuXHRcdC5mYWN0b3J5KCdMb2dpblNlcnZpY2UnLCBMb2dpblNlcnZpY2UpO1xuXG5cdExvZ2luU2VydmljZS4kaW5qZWN0ID0gIFsnJGh0dHAnXTtcblxuXHRmdW5jdGlvbiBMb2dpblNlcnZpY2UoJGh0dHApIHtcblx0XHR2YXIgbG9naW5TZXJ2aWNlID0ge1xuXHRcdFx0bG9naW46IGxvZ2luXG5cdFx0fTtcblxuXG5cdFx0ZnVuY3Rpb24gbG9naW4gKCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxvZ2luU2VydmljZTtcblx0fVxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
