angular.module("productsFactory", [])
	.factory("products", function($http){
			function getData(callback){
				$http({
					method: "GET",
					url: "../data/products.json",
					cache: true
				}).success(callback);
			}
			return{
				list: getData,
				find: function(imn, callback){
					getData(function(data){
						var product = data.filter(function(entry){
							return entry.imn===imn;
						})[0];
						callback(product);
					});
				}
			};
				
		});