var app = angular.module('tacticgo', [
    'ionic',
    //'ngMessages',
    'tacticgo.controllers.authentication',
    'tacticgo.services.authentication',
    'tacticgo.controllers.plans',
    'tacticgo.services.plans'
]);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  //  .state('app', {
  //  url: '/app',
  //  abstract: true,
  //  templateUrl: 'templates/menu.html',
  //  controller: 'AppCtrl'
  //})

    .state('login', {
        url: '/login',
        cache: false,
        controller: 'LoginCtrl',
        templateUrl: "templates/authentication/login.html"
    })

      .state('signup', {
          url: '/signup',
          cache: false,
          controller: 'SignupCtrl',
          templateUrl: "templates/authentication/signup.html"
      })

      .state('profile', {
          url: '/profile',
          templateUrl: "templates/profile.html",
          controller: "ProfileCtrl"
      })

      .state('planForm', {
          url: '/addPlan',
          templateUrl: "templates/planForm.html",
          controller: "AddPlanCtrl"
      })

    .state('tabsHome', {
        url: '/tabsHome',
        controller: 'TabsCtrl',
        templateUrl: 'templates/tabs/tabsHome.html'
    })

    .state('tabsHome.myPlans', {
        url: '/myPlans',
        views: {
            'viewMyPlans': {
                templateUrl: 'templates/tabs/myPlans.html',
                controller: 'MyPlansCtrl'
            }
        }
    })

    .state('tabsHome.myTracks', {
        url: '/myTracks',
        views: {
            'viewMyTracks': {
                templateUrl: 'templates/tabs/myTracks.html',
                controller: 'MyTracksCtrl'
            }
        }
    })

    .state('tabsHome.explore', {
        url: '/explore',
        views: {
            'viewExplore': {
                templateUrl: 'templates/tabs/explore.html',
                controller: 'PlansFeedCtrl'
            }
        }
    })

    ;
  $urlRouterProvider.otherwise('/tabsHome/explore');
});

app.controller('TabsCtrl', function ($scope, $ionicSideMenuDelegate) {

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    }

});

app.controller('ProfileCtrl', function ($scope, $ionicSideMenuDelegate) {

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    }

});

