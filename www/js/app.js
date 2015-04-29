angular.module('footFeeds', ['ionic', 'footFeeds.controllers', 'footFeeds.services', 'ionic.contrib.drawer'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
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