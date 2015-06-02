var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {

	console.log('help')
	
	$scope.getUsers = function() {
		$scope.users = mainService.getUsers();
	}
	$scope.getUsers();
})