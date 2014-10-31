angular.module('starter.controllers', [])

	.controller('DashCtrl', function ($scope, Categories)
	{
		Categories.all().success(function (data)
		{
			$scope.categories = data;
		})
		console.log($scope.categories)
	})

	.controller('CategoriesCtrl', function ($scope, Categories)
	{
		Categories.all().success(function (data)
		{
			$scope.categories = data;
		})
	})

	.controller('CategoryDetailCtrl', function ($scope, $stateParams, Categories)
	{
		Categories.get($stateParams.categoryId).success(function(data){
			$scope.category = data.category;
			$scope.categories = data.categories;
		})
	})

	.controller('CategoryProductsCtrl', function ($scope, $stateParams, Categories)
	{
		Categories.getProducts($stateParams.categoryId).success(function(data){
			$scope.category = data.category;
			$scope.products = data.products;
		})
	})

	.controller('ProductCtrl', function ($scope, $stateParams, Categories)
	{
		Categories.getProduct($stateParams.productId).success(function (data)
		{
			$scope.product = data;
		})
	})

	.controller('AccountCtrl', function ($scope)
	{
	});
