<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
	<base href="/">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="/css/vendor.css">
	<link rel="stylesheet" href="/css/app.css">
</head>
<body>

	<div class="container">
		<nav class="navbar navbar-default" ng-include="'views/app/header/header.html'">
		</nav>
			<div ui-view></div>
		</div>
	</div>

	<script src="/js/vendor.js"></script>
	<script src="http://localhost:9000/socket.io/socket.io.js"></script>
	<script src="/js/app.js"></script>
</body>
</html>
