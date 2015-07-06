var productsController = angular.module("productsController", []);

productsController.controller("productsCtrl", function($scope, products, $routeParams){
			products.list(function (products){
				$scope.products = products;
			});
			
			products.find($routeParams.productImn, function(product){
				$scope.product = product;
			});
			
});