// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
	'ionic',
	'starter.controllers',
	'starter.services'
])

	.run(function ($ionicPlatform)
	{
		$ionicPlatform.ready(function ()
		{
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins.Keyboard)
			{
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if (window.StatusBar)
			{
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}
			if (window.plugins && window.plugins.AdMob)
			{
				var admob_key = device.platform == "Android" ? "ca-app-pub-3953382062669761/1317516739" : "ca-app-pub-3953382062669761/1317516739";
				var admob = window.plugins.AdMob;
				
				
				admob.createBannerView(
					{
						'publisherId': admob_key,
						'adSize'     : 'MEDIUM_RECTANGLE',
						'bannerAtTop': true
					},
					function ()
					{
						admob.requestAd(
							{ 'isTesting': true },
							function ()
							{
								admob.showAd(true);
							},
							function ()
							{
								console.log('failed to request ad');
							}
						);
					},
					function ()
					{
						console.log('failed to create banner view');
					}
				);
			}
		});
	})

	.config(function ($httpProvider)
	{
		//$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
		//set up CORS...
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
	})

	.config(function ($stateProvider, $urlRouterProvider)
	{
		// Ionic uses AngularUI Router which uses the concept of states
		// Learn more here: https://github.com/angular-ui/ui-router
		// Set up the various states which the app can be in.
		// Each state's controller can be found in controllers.js
		$stateProvider

			// setup an abstract state for the tabs directive
			.state('tab', {
				url        : "/tab",
				abstract   : true,
				templateUrl: "templates/tabs.html"
			})

			// Each tab has its own nav history stack:

			.state('tab.categories', {
				url  : '/categories',
				views: {
					'tab-products': {
						templateUrl: 'templates/categories.html',
						controller : 'CategoriesCtrl'
					}
				}
			})
			.state('tab.friend-detail', {
				url  : '/category/:categoryId',
				views: {
					'tab-products': {
						templateUrl: 'templates/category.html',
						controller : 'CategoryDetailCtrl'
					}
				}
			})

			.state('tab.products', {
				url  : '/category/products/:categoryId',
				views: {
					'tab-products': {
						templateUrl: 'templates/products.html',
						controller : 'CategoryProductsCtrl'
					}
				}
			})

			.state('tab.product', {
				url  : '/product/:productId',
				views: {
					'tab-products': {
						templateUrl: 'templates/product.html',
						controller : 'ProductCtrl'
					}
				}
			})

			.state('tab.about', {
				url  : '/about',
				views: {
					'tab-about': {
						templateUrl: 'templates/tab-about.html',
						controller : 'AboutCtrl'
					}
				}
			});

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/tab/categories');

	});

