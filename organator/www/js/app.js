//declare database to be open
var db = null;

angular.module('starter', ['ionic','ui.router','starter.controllers', 'ngCordova', 'firebase', 'ngMessages'])

.run(function ($ionicPlatform, $cordovaSQLite) {
	$ionicPlatform.ready(function () {
		if (window.cordova && window.cordova.plugins.Keyboard) {
            
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
            
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})
.config(function ($stateProvider, $urlRouterProvider) {
    
	$stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'template/home.html',
        controller: 'AppCntrl'
    })
	.state('hospital', {
		url: '/hospital',
		cache: false,
		templateUrl: 'template/hospital_login.html',
		controller: 'hospitalCtrl'
	})
	.state('donor', {
			url: '/donor',
			cache: false,
			templateUrl: function(){
                if(ionic.Platform.isAndroid()){
                    return 'template/droid_donor_login.html';
                }
                return 'template/donor_login.html';
            },
			controller: 'donorCtrl'
		})
		// Each tab has its own nav history stack:
		.state('whyToDonate', {
			url: '/whyToDonate',
			cache: false,
			templateUrl: 'template/why_to_donate.html',
			controller: 'whyToDonateCtrl'
		})
        .state('hospital_home', {
            url: '/hospital_home', 
            cache: false, 
            templateUrl: 'template/hospital_home.html',
            controller: 'hospitalHomeCtrl'
        })
        .state('donor_signup', {
            url: '/donor_signup', 
            cache: false, 
            templateUrl: 'template/signUp.html',
            controller: 'donorsignupCtrl'
        })
        .state('personalDetails', {
            url: '/personalDetails',
            cache: false,
            templateUrl: 'template/personalDetails.html',
            controller: 'personalDetailsCtrl'
        })
        .state('addressDetails', {
            url: '/addressDetails',
            cache: false,
            templateUrl: 'template/addressDetails.html',
            controller: 'addressDetailsCtrl'
        })
        .state('organsDetails', {
            url: '/organsDetails',
            cache: false,
            templateUrl: 'template/organsDetails.html',
            controller: 'organsDetailsCtrl'
        })
        .state('confirmPage', {
            url: '/confirmPage',
            cache: false,
            templateUrl: 'template/confirmPage.html',
            controller: 'confirmPageCtrl'
        })
        .state('healthFitness', {
            url: '/healthFitness',
            cache: false,
            templateUrl: 'template/healthFitness.html',
            controller: 'healthFitnessCtrl'
        })
	   $urlRouterProvider.otherwise('/home');

});
