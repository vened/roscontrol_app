(function ()
{
	"use strict"

	angular.module('starter.services', [])


	function Categories($http)
	{
		return {
			all: function ()
			{
				return $http.get("http://roscontrol.rocket-web.ru/")
			},
			get: function (categoryId)
			{
				return $http.get("http://roscontrol.rocket-web.ru/category/" + categoryId)
			},
			getProducts: function (categoryId)
			{
				return $http.get("http://roscontrol.rocket-web.ru/category/products/" + categoryId)
			},
			getProduct: function (productId)
			{
				return $http.get("http://roscontrol.rocket-web.ru/product/" + productId)
			}
		}
	}


	Categories.$inject = ['$http'];
	angular
		.module('starter.services')
		.service('Categories', Categories);


})()