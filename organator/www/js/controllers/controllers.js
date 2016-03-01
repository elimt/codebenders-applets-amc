angular.module('starter.controllers', ['ionic','ui.router', 'ngCordova', 'firebase', 'ngMessages'])
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
         $scope.myvalue = false;
        $scope.loginData = {};
		$scope.init = function () {}
		$scope.hospital_login_clicked = function(){
 
  var ref = new Firebase("https://organator.firebaseio.com");
 
  ref.authWithPassword({
    email    : $scope.loginData.email,
    password : $scope.loginData.password
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
      $scope.loginData.errorMessage = 'Email or password is incorrect';
      $scope.myvalue = true;
      $scope.init="submit=true"
    } else {
      console.log("Authenticated successfully with payload:", authData);
            $state.go('hospital_home');
        
    }  }, {
  remember: "sessionOnly"
});
 
}
        

	})


.controller('donorCtrl', function ($scope, $state) {
     $scope.myvalue = false;
        $scope.loginData = {};
		$scope.init = function () {}
        $scope.new_user_clicked = function(){
            $state.go('donor_signup');
            
        }
         $scope.auth_true = function(){
 
  var ref = new Firebase("https://organator.firebaseio.com");
 
  ref.authWithPassword({
    email    : $scope.loginData.email,
    password : $scope.loginData.password
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
      $scope.loginData.errorMessage = 'Email or password is incorrect';
       $scope.myvalue = true;
    } else {
      console.log("Authenticated successfully with payload:", authData);
            $state.go('personalDetails');
    }  }, {
  remember: "sessionOnly"
});
 
}

$scope.auth_true_Gmail = function(){
var ref = new Firebase("https://organator.firebaseio.com");
ref.authWithOAuthPopup("google", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
    $state.go('personalDetails');
  }
}, {
  remember: "sessionOnly",
  scope: "email"
}
);
}

$scope.auth_true_Facebook = function(){
var ref = new Firebase("https://organator.firebaseio.com");
ref.authWithOAuthPopup("facebook", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
    $state.go('personalDetails');
  }
}, {
  remember: "sessionOnly",
  scope: "email,user_likes"
}
);
}
         
})
.controller('hospitalHomeCtrl', function($scope, $cordovaSQLite, Users){
    $scope.init = function(){}
    $scope.listOfDonors = Users;
})
.controller('donorsignupCtrl', function ($scope, $state, Users) {
    $scope.myvalue = false;
        $scope.Model = {};
		$scope.init = function () {}
     
        $scope.signupEmail = function(email,  password){  
 
  var ref = new Firebase("https://organator.firebaseio.com");
 
  ref.createUser({
    email    : $scope.Model.email,
    password : $scope.Model.password
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
      
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
      $scope.myvalue = true;
    }
  });
 
};
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
