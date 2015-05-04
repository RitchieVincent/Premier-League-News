angular.module('footFeeds', ['ionic', 'footFeeds.controllers', 'footFeeds.services', 'ionic.contrib.drawer', 'ngCordova'])

.run(function ($ionicPlatform, $cordovaStatusbar) {
    $ionicPlatform.ready(function () {
        
        Parse.initialize("TBH2gJwlnhLnehk5ZfOqHjtGFo9pLy0zYfqDR0yh", "pceJz3UaZJC0Aismo9gNpCWSCAZA3AzMgLJUsYsx");
        
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if (StatusBar && statusbarTransparent) {

            //Hide the statusbar
            StatusBar.hide();

            // Enable translucent statusbar
            statusbarTransparent.enable();

            // Get the bar back. after half a second
            setTimeout(function () {
                StatusBar.show();
            }, 500);
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    //This line disables JavaScript scrolling, which is laggy and outdated, using native scrolling instead
    if (!ionic.Platform.isIOS()) $ionicConfigProvider.scrolling.jsScrolling(false);


    $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: "menuController"
    })

    .state('app.home', {
        url: "/home",
        views: {
            'menuContent': {
                templateUrl: "templates/home.html"
            }
        }
    })
    .state('app.news', {
        url: "/news",
        views: {
            'menuContent': {
                templateUrl: "templates/news.html",
                controller: "newsController"
            }
        }
    })
    .state('app.social', {
        url: "/social",
        views: {
            'menuContent': {
                templateUrl: "templates/social.html",
                controller: "socialController"
            }
        }
    })
    .state('app.user', {
        url: "/user",
        views: {
            'menuContent': {
                templateUrl: "templates/user.html",
                controller: "userController"
            }
        }
    })
    .state('app.userSubmit', {
        url: "/userSubmit",
        views: {
            'menuContent': {
                templateUrl: "templates/userSubmit.html"
            }
        }
    })
    .state('app.help', {
        url: "/help",
        views: {
            'menuContent': {
                templateUrl: "templates/help.html"
            }
        }
    })
    .state('app.settings', {
        url: "/settings",
        views: {
            'menuContent': {
                templateUrl: "templates/settings.html",
                controller: "settingsController"
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});