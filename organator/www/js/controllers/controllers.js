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
		$scope.authen = false;
		$scope.uid = '';
        $scope.new_user_clicked = function()
		{
            $state.go('donor_signup');
            
        }
		
		function authDataCallback(authData) {
  if (authData) {
	  $state.go('personalDetails');
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
	$scope.uid = authData.uid;
  } else {
    console.log("User is logged out");

  }
}



  var ref = new Firebase("https://organator.firebaseio.com");
ref.onAuth(authDataCallback);
         $scope.auth_true = function(){
 
  var ref = new Firebase("https://organator.firebaseio.com");
 
  ref.authWithPassword({
    email    : $scope.loginData.email,
    password : $scope.loginData.password,
	rememberMe: false
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
      $scope.loginData.errorMessage = 'Email or password is incorrect';
       $scope.authen = false;
    } else {
      console.log("Authenticated successfully with payload:", authData);
            $state.go('personalDetails');
			$scope.authen = true;
    }  }, {
  remember: "default"
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
  remember: "default",
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
  remember: "default",
  scope: "email,user_likes"
}
);
}
         
})
.controller('hospitalHomeCtrl', function($scope, $cordovaSQLite, Users){
    $scope.init = function(){}
    $scope.listOfDonors = Users;
	$scope.donorList = {};
	
	$scope.getDonors = function(){
	var ref = new Firebase("https://organator.firebaseio.com/users/personalDetails");
	var ref2 = new Firebase("https://organator.firebaseio.com/users/organDetails");
// Retrieve new posts as they are added to our database
  $scope.donorList = [];
  var id_counter = 0;
  var id_counter_organ = 0;
ref.orderByKey().once("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
  var data = childSnapshot.val();
  var data = childSnapshot.val();
  id_counter += 1
  $scope.donorList.push({sort_id:id_counter, name:data.firstName + " " + data.lastName, sex:data.sex, bloodGroup:data.bloodGroup});
  });
});


/*ref2.orderByKey().once("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
  var data = childSnapshot.val();
  id_counter_organ += 1;
  
  $scope.donorList.push({eyes:data.eyes});
  });
}); */
	}
	
	$scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
})
.controller('donorsignupCtrl', function ($scope, $state, Users) {
    $scope.myvalue = false;
        $scope.signup = {};
		$scope.successful = false;
		$scope.init = function () {}
     
        $scope.signupEmail = function(){  
 
  var ref = new Firebase("https://organator.firebaseio.com");
 
  ref.createUser({
    email    : $scope.signup.email,
    password : $scope.signup.password
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
      
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
	  $scope.successful = true;
	  $state.go('personalDetails');
    }
  });
 
};

})


.controller('whyToDonateCtrl', function ($scope) {
		$scope.init = function () {}

})
.controller('personalDetailsCtrl', function($scope, $state) {
			
			function authDataCallback(authData) {
  if (authData) {
	  $state.go('personalDetails');
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
	
  } else {
    $state.go('donor');

  
  }
			}
  
  $scope.enterData =  function(lastName, firstName, healthInsuranceNumber, dateOfBirth, bloodGroup, sex){  
  var lastName, firstName, healthInsuranceNumber, dateOfBirth, bloodGroup, sex;
  this.lastName = lastName;
  this.firstName = firstName;
  this.healthInsuranceNumber = healthInsuranceNumber;
  this.dateOfBirth = dateOfBirth;
  this.bloodGroup = bloodGroup;
  this.sex = sex;
  
  var ref2 = new Firebase("https://organator.firebaseio.com/users");
	var userID = ref2.getAuth().uid;
	
var usersRef = ref2.child("personalDetails").child(userID);
usersRef.set({
	firstName: firstName,
    lastName: lastName,
    healthInsuranceNumber: healthInsuranceNumber,
	dateOfBirth: dateOfBirth.toString(),
	bloodGroup: bloodGroup,
	sex: sex
});
};


  var ref = new Firebase("https://organator.firebaseio.com");
ref.onAuth(authDataCallback)

    $scope.valid_persoDetails =  function(){
        $state.go('addressDetails');
    }
	
	$scope.logout = function() {
		var ref = new Firebase("https://organator.firebaseio.com");
 
  ref.unauth();
  $state.go('home');
	}
	
	
	$scope.myGoBack = function() {
     $state.go('home');
  }
})

.controller('addressDetailsCtrl', function($scope, $state) {
    $scope.valid_addressDetails = function(){
        $state.go('organsDetails');
    }
	
	  $scope.enterData =  function(houseNumber, streetNumber, city, stateProvince, country, postalCode, phoneNumber){  
  var houseNumber, streetNumber, city, stateProvince, country, postalCode, phoneNumber;
  this.houseNumber = houseNumber;
  this.streetNumber = streetNumber;
  this.city = city;
  this.stateProvince = stateProvince;
  this.country = country;
  this.postalCode = postalCode;
  this.phoneNumber = phoneNumber;
  
  var ref2 = new Firebase("https://organator.firebaseio.com/users");
	var userID = ref2.getAuth().uid;
	
var usersRef = ref2.child("addressDetails").child(userID);
usersRef.set({
	houseNumber: houseNumber,
    streetNumber: streetNumber,
    city: city,
	stateProvince: stateProvince,
	country: country,
	postalCode:postalCode,
	phoneNumber:phoneNumber
});
};
})

.controller('organsDetailsCtrl', function($scope, $state) {
    $scope.valid_organsDetails =  function(){
        $state.go('confirmPage');
    }
	
		  $scope.enterData =  function(kidney, heart, eyes, bones, liver, lungs, skin, pancreas){  
  var kidney, heart, eyes, bones, liver, lungs, skin, pancreas;
  this.kidney = kidney;
  this.heart = heart;
  this.eyes = eyes;
  this.bones = bones;
  this.liver = liver;
  this.lungs = lungs;
  this.skin = skin;
  this.pancreas = pancreas;
  
  var ref2 = new Firebase("https://organator.firebaseio.com/users");
	var userID = ref2.getAuth().uid;
	
var usersRef = ref2.child("organDetails").child(userID);
usersRef.set({
	kidney: kidney,
    heart: heart,
    eyes: eyes,
	bones: bones,
	liver: liver,
	lungs:lungs,
	skin:skin,
	pancreas:pancreas
});
};
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
