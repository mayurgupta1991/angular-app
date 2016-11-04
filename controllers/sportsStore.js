angular.module("sportsStore").controller("sportsStoreCtrl", function($scope, $http, cart, $location) {

	$scope.data = {
		products : []
	};

	/*
	 $scope.mayur = 'views/productList.html';
	 <ng-include src="mayur"></ng-include> inside html
	 */

	$http.get("data/pack.json").success(function(data) {
		$scope.data.products = data;
	}).error(function(error) {
		console.log(error);
	});

	$scope.sendOrder = function(shippingDetails) {
		var order = angular.copy(shippingDetails);
		order.products = cart.getProducts();

		console.log(order);

		$location.path("/complete");
		/* post request
		 $http.post(orderUrl, order).success(function(data) {
		 $scope.data.orderId = data.id;
		 cart.getProducts().length = 0;
		 });*/

	};
}).controller("dayCtrl", function($scope) {
	var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	$scope.day = dayNames[new Date().getDay()];
	
}).directive("highlight", function() {
	return function(scope_name, element_name, attrs_name) {
		console.log(scope_name);
		console.log(element_name);
		console.log(attrs_name);
		if (scope_name.day == attrs_name["highlight"]) {
			element_name.css("color", "red");
		}
	};
});
