angular.module('starter.controllers', [])

.controller('AppCntrl', function ($scope, $state) {

	$scope.init = function () {

	}

	$scope.hospital_clicked = function () {

		$state.go('hospital');
	}
	$scope.donor_clicked = function () {

		$state.go('donor');
	}
	$scope.why_donate = function () {

		$state.go('whyToDonate');
	}
})


.controller('hospitalCtrl', function ($scope) {

		$scope.init = function () {}

	})


.controller('donorCtrl', function ($scope) {
		$scope.init = function () {}

})
.controller('whyToDonateCtrl', function ($scope) {
		$scope.init = function () {}

});


.controller('personalDetailsCtrl', function($scope) {

})

.controller('addressDetailsCtrl', function($scope) {

})

.controller('organsDetailsCtrl', function($scope) {

})

.controller('confirmPageCtrl', function($scope) {

})
