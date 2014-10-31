(function ()
{
	"use strict"

	angular.module('starter.services', [])


	function Categories($http)
	{
		return {
			all: function ()
			{
				return $http.get("http://localhost:3000/")
			},
			get: function (categoryId)
			{
				return $http.get("http://localhost:3000/category/" + categoryId)
			},
			getProducts: function (categoryId)
			{
				return $http.get("http://localhost:3000/category/products/" + categoryId)
			},
			getProduct: function (productId)
			{
				return $http.get("http://localhost:3000/product/" + productId)
			}
		}
	}


	Categories.$inject = ['$http'];
	angular
		.module('starter.services')
		.service('Categories', Categories);


})()