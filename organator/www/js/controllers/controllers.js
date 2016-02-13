angular.module('starter.controllers', [])

.controller('AppCntrl', function ($scope, $state) {

	$scope.init = function () {

	}

	$scope.hospital_clicked = function () {

		$state.go('hospital');
	}
	$scope.donar_clicked = function () {

		$state.go('donar');
	}
	$scope.why_donate = function () {

		$state.go('whyToDonate');
	}
})


.controller('hospitalCtrl', function ($scope) {

		$scope.init = function () {}

	})

.controller('donarCtrl', function ($scope) {
		$scope.init = function () {}

})
.controller('whyToDonateCtrl', function ($scope) {
		$scope.init = function () {}

});