angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('side-menu', {
        url: "/side",
        abstract: true,
        templateUrl: "templates/sideMenu.html"
    })
    .state('side-menu.home', {
        url: "/home",
        views: {
            'menuContent' :{
                templateUrl: "templates/home.html"
            }
        }
    })
    .state('side-menu.social', {
        url: "/social",
        views: {
            'menuContent' :{
                templateUrl: "templates/social.html",
                controller: "socialController"
            }
        }
    })
    .state('side-menu.news', {
        url: "/news",
        views: {
            'menuContent' :{
                templateUrl: "templates/news.html",
                controller: "AttendeesCtrl"
            }
        }
    })

    $urlRouterProvider.otherwise("/side/home");
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
})

.controller('socialController', function($scope) {
    $scope.items = [
        {icon: "home", title: "Home"},
        {icon: "envelope", title: "My Messages"},
    ];
})

.controller('AttendeesCtrl', function($scope) {

});