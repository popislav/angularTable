
var productsApp = angular.module("productsApp", [
	"ngRoute",
	"productsController",
	"productsFactory"
]);
	
productsApp.config(function($routeProvider){
	$routeProvider.
		when("/",{
			templateUrl: "template.html",
			 controller: "productsCtrl" 
		}).
		when("/:productImn", {
			templateUrl: "template.html",
			 controller: "productsCtrl" 
		}).
		otherwise({
			redirectTo: "/"
		});
});
		
productsApp.filter("encodeURI", function(){
	return window.encodeURI;
});
		
