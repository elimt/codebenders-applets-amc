angular.module('starter.controllers', [ 'ionic', 'ngCordova'])

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


.controller('hospitalCtrl', function ($scope, $state) {

		$scope.init = function () {}
        $scope.hospital_login_clicked = function(){
            $state.go('hospital_home');
        }

	})


.controller('donorCtrl', function ($scope) {
		$scope.init = function () {}

})
.controller('hospitalHomeCtrl', function($scope, $cordovaSQLite){
    $scope.init = function(){}
    $scope.listOfDonors = [
            {name:'ron', country:'Norway'},
            {name:'Hege',country:'Sweden'},
            {name:'Kai',country:'Denmark'}
    ];
    $scope.insert = function(firstname, lastname) {
        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
            console.log("INSERT ID -> " + res.insertId);
        }, function (err) {
            console.error(err);
        });
    }
 
    $scope.select = function(lastname) {
        var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
        $cordovaSQLite.execute(db, query, [lastname]).then(function(res) {
            if(res.rows.length > 0) {
                console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });
    }
   
})
.controller('whyToDonateCtrl', function ($scope) {
		$scope.init = function () {}
        
})
.controller('personalDetailsCtrl', function($scope) {

})

.controller('addressDetailsCtrl', function($scope) {

})

.controller('organsDetailsCtrl', function($scope) {

})

.controller('confirmPageCtrl', function($scope) {

});
