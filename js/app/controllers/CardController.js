function CardController($scope) {
	$scope.username.toLowercase();
}

angular
	.module('app')
	.controller('CardController', CardController)
