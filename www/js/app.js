// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('mPaani', ['ionic', 'mPaani.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('app', {
      url: "/app",
      templateUrl: "templates/login.html",
      controller: 'LoginCtrl'
    })

    .state('signUp', {
      url: "/app/signUp",
      templateUrl: "templates/signUp.html",
      controller: 'SignUpCtrl'
    })

    .state('home', {
      url: "/app/home",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'MenuCtrl'
    })

    .state('home.dashboard', {
      url: "/dashboard",
      views: {
        'menuContent' :{
          templateUrl: "templates/dashboard.html",
          controller: 'DashboardCtrl'
        }
      }
    })

    .state('home.profile', {
      url: "/profile",
      views: {
        'menuContent' :{
          templateUrl: "templates/profile.html"
        }
      }
    })

    .state('home.transactions', {
      url: "/transactions",
      views: {
        'menuContent' :{
          templateUrl: "templates/transactions.html",
          controller: 'TransactionsCtrl'
        }
      }
    })

    .state('home.invite', {
      url: "/invite",
      views: {
        'menuContent' :{
          templateUrl: "templates/invite.html",
        }
      }
    })

    .state('home.partners', {
      url: "/partners",
      views: {
        'menuContent' :{
          templateUrl: "templates/partners.html",
        }
      }
    })

    .state('home.partnerList', {
      url: "/partnerList",
      views: {
        'menuContent' :{
          templateUrl: "templates/partnerList.html",
          controller: 'PartnerListCtrl'
        }
      }
    })

    .state('home.offers', {
      url: "/offers",
      views: {
        'menuContent' :{
          templateUrl: "templates/offers.html",
          controller: 'OffersCtrl'
        }
      }
    })

    .state('home.redeem', {
      url: "/redeem",
      views: {
        'menuContent' :{
          templateUrl: "templates/redeem.html",
          controller: 'RedeemCtrl'
        }
      }
    })

    .state('home.redeemDetails', {
      url: "/redeemDetails",
      views: {
        'menuContent' :{
          templateUrl: "templates/redeemDetails.html",
          controller: 'RedeemCtrl'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app');
});
