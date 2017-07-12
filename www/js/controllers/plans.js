var app = angular.module('tacticgo.controllers.plans', []);
app.controller('PlansFeedCtrl', function ($scope, $state, PlanStore) {

    PlanStore.listPlans().then(function (plans) {
        $scope.plans = plans;
    });

});

app.controller('AddPlanCtrl', function ($scope, $state, $ionicSideMenuDelegate, PlanStore) {

    $scope.formData = {
        "title": "",
        "requirements": "",
        "description": "",
        "goals": "",
        "category": "",
        "level": 0
    };

    $scope.addPlan = function (form) {
        if (form.$valid) {
            PlanStore.addPlan(

                ).then(function () {
                    alert('Thanks for sharing! Your plan has been published.');
                    $state.go("tabsHome");
                })
        } else {
            alert('Please enter all required valid info.');
        }
    };

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    }

});