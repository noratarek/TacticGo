var app = angular.module('tacticgo.controllers.authentication', []);
app.controller('LoginCtrl', function ($scope, $state, AuthService) {
    $scope.formData = {
        "email": "",
        "password": ""
    };
    $scope.login = function (form) {
        if (form.$valid) {
            AuthService.login($scope.formData.email, $scope.formData.password)
              .then(function () {
                  $state.go("tabsHome.explore");
                  console.log("ok");
              });
        }
        else {
            console.log("Invalid Form");
        }
    };
});
app.controller('SignupCtrl', function ($scope, $state, AuthService) {
    $scope.formData = {
        "email": "",
        "password1": "",
        "password2": ""
    };
    $scope.signup = function (form) {
        if (form.$valid) {
            AuthService.signup(
              $scope.formData.email,
              $scope.formData.password1,
              $scope.formData.password2)
              .then(function () {
                  alert('We have created your account. Achieve your goals!');
                  $state.go("tabsHome");
              });
        }
        else {
            alert('Please enter valid info.');
        }
    };
});
