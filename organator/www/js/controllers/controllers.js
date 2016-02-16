angular.module('starter.controllers', [ 'ionic', 'ngCordova', 'firebase'])
.factory("Users", function($firebaseArray){
    var itemsRef = new Firebase("https://organator.firebaseio.com/");
    return $firebaseArray(itemsRef);
})
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


.controller('donorCtrl', function ($scope, $state) {
		$scope.init = function () {}
        $scope.new_user_clicked = function(){
            $state.go('donor_signup');
        }
         $scope.auth_true = function (){
            $state.go('personalDetails');
        }
         
})
.controller('hospitalHomeCtrl', function($scope, $cordovaSQLite, Users){
    $scope.init = function(){}
    $scope.listOfDonors = Users;
//    $scope.listOfDonors = [
//            {name:'ron', country:'Canada', province: 'QC', bloodType: 'O+', age: '22', organs: ['Kidneys', 'Heart', 'Eyes']},
//            {name:'Hege',country:'Canada', province: 'QC', bloodType: 'AB-', age: '52', organs: ['Heart']},
//            {name:'Kai',country:'Canada',  province: 'QC', bloodType: 'O-', age: '21', organs: ['Heart', 'Eyes']}, 
//            {name:'Kai',country:'Canada',  province: 'QC', bloodType: 'A+', age: '19', organs: ['Skin', 'Eyes']}
//    ];
//    $scope.insert = function(firstname, lastname) {
//        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
//        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
//            console.log("INSERT ID -> " + res.insertId);
//        }, function (err) {
//            console.error(err);
//        });
//    }
//
//    $scope.select = function(lastname) {
//        var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
//        $cordovaSQLite.execute(db, query, [lastname]).then(function(res) {
//            if(res.rows.length > 0) {
//                console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
//            } else {
//                console.log("No results found");
//            }
//        }, function (err) {
//            console.error(err);
//        });
//    }

})
.controller('donorsignupCtrl', function ($scope, $state, Users) {
        $scope.users = Users;
		$scope.init = function () {}
        $scope.auth_true = function (){
            $state.go('personalDetails');
        }
        $scope.add_user = function(){
            var name = prompt("try this");
            if(name){
                $scope.users.$add({
                    "name": name
                });
            }
        }
})


.controller('whyToDonateCtrl', function ($scope) {
		$scope.init = function () {}

})
.controller('personalDetailsCtrl', function($scope, $state) {
    $scope.valid_persoDetails =  function(){
        $state.go('addressDetails');
    }
})

.controller('addressDetailsCtrl', function($scope, $state) {
    $scope.valid_addressDetails = function(){
        $state.go('organsDetails');
    }
})

.controller('organsDetailsCtrl', function($scope, $state) {
    $scope.valid_organsDetails =  function(){
        $state.go('confirmPage');
    }
})


.controller('confirmPageCtrl', function($scope, $state) {
    $scope.valid_confirmation =  function(){
        $state.go('healthFitness');
    }
})
.controller('healthFitnessCtrl', function($scope, $state) {
    $scope.init =  function(){

    }
});
