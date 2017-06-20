var app = angular.module('tacticgo', [
    'ionic',
    //'ngMessages',
    'tacticgo.controllers.authentication',
    'tacticgo.controllers.account',
    'tacticgo.services.authentication'
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

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

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

    .state('tabsHome.myPlans', {
        url: '/myPlans',
        cache: false,
        views: {
            'viewMyPlans': {
                templateUrl: 'templates/tabs/myPlans.html',
                controller: 'MyPlansCtrl'
            }
        }
    })

    .state('tabsHome.myTracks', {
        url: '/myTracks',
        cache: false,
        views: {
            'viewMyTracks': {
                templateUrl: 'templates/tabs/myTracks.html',
                controller: 'MyTracksCtrl'
            }
        }
    })

    .state('tabsHome.explore', {
        url: '/explore',
        cache: false,
        views: {
            'viewExplore': {
                templateUrl: 'templates/tabs/explore.html',
                controller: 'ExploreCtrl'
            }
        }
    })

    .state('tabsHome', {
        url: '/tabsHome',
        templateUrl: 'templates/tabs/tabsHome.html',
        abstract: true
    })
    ;
  $urlRouterProvider.otherwise('/tabsHome/explore');
});
