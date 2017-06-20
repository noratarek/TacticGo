var app = angular.module('tacticgo.controllers.account', []);
app.controller('AccountCtrl', function ($scope, $state, AuthService) {
    $scope.formData = {
        email: AuthService.user.attributes.email
    };
    $scope.logout = function () {
        Parse.User.logOut();
        $state.go("login");
        console.log("AccountCtrl::logout");
        //TODO
    };
});
