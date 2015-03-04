// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var rssApp = angular.module('pLNews', ['ionic'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

rssApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: "",
        abstract: true,
        templateUrl: "menu.html"
    })

    .state('app.main', {
        url: "/main",
        views: {
            'menuContent': {
                templateUrl: "main.html"
            }
        }
    })

    .state('app.newsFeed', {
        cache: false,
        url: "/newsFeed",
        views: {
            'menuContent': {
                templateUrl: "newsFeed.html"
            }
        }
    })

    .state('app.settings', {
        url: "/settings",
        views: {
            'menuContent': {
                templateUrl: "settings.html"
            }
        }
    })

    $urlRouterProvider.otherwise('/main');

});

rssApp.controller("FeedCtrl", ['$scope', 'FeedService', function ($scope, Feed) {
    //    $scope.filter = '';
    //    
    //    $scope.$on('$ionicView.enter', function(){
    //        alert("woo");
    //    });

    numFeeds = 5;

    $scope.doRefresh = function () {
        $scope.loadFeed();
        $scope.$broadcast('scroll.refreshComplete');
    };

    $scope.loadMore = function () {
        if(numFeeds<30){ //Stops the scroll going on infinitely
            numFeeds++;
            $scope.$broadcast('scroll.infiniteScrollComplete');
            console.log(numFeeds);
            $scope.loadFeed();
        } else{
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    };

    $scope.teamSelect = function () {
        team = window.localStorage['team'] || 'Arsenal';
        teamImg = window.localStorage['teamImg'] || '';
        teamClass = window.localStorage['teamClass'] || '';
        filter = window.localStorage['filter'] || '.';

        $scope.selectedTeamMsg = 'Your chosen team is ' + team + '.';
        $scope.teamSelected = team;
        $scope.selectedTeamImg = teamImg;
        $scope.selectedTeamClass = teamClass;
        $scope.feedSrc = 'http://pipes.yahoo.com/pipes/pipe.run?_id=d5af746000fcb3a1606ee8eff37328dd&_render=rss&textinput2=' + filter + '&textinput1=' + team + '';
        $scope.loadFeed();
    };

    $scope.loadFeed = function (e) {
        Feed.parseFeed($scope.feedSrc).then(function (res) {
            $scope.feeds = res.data.responseData.feed.entries;
        });
    }
}]);

rssApp.controller('filterRadioController', ['$scope', function($scope) {
    $scope.color = {
        name: '' //Default value
    };
    $scope.updateFilter = function () {
        window.localStorage['filter'] = $scope.color.name;
    }
}]);

rssApp.controller('teamSelectController', ['$scope', function ($scope) {
    var team = window.localStorage['team'] || 'Arsenal';
    var teamImg = window.localStorage['teamImg'] || '';
    $scope.options = [
        {
            label: 'Arsenal',
            value: 'Arsenal',
            class: 'ars',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/a/arsenal/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Aston Villa',
            value: 'Aston Villa',
            class: 'avi',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/a/aston-villa/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Burnley',
            value: 'Burnley',
            class: 'bur',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/b/burnley/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Chelsea',
            value: 'Chelsea',
            class: 'che',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/c/chelsea/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Crystal Palace',
            value: 'Crystal Palace',
            class: 'cpa',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/c/crystal-palace/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Everton',
            value: 'Everton',
            class: 'eve',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/e/everton/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Hull',
            value: 'Hull',
            class: 'hul',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/h/hull/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Leicester',
            value: 'Leicester',
            class: 'lei',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/l/leicester/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Liverpool',
            value: 'Liverpool',
            class: 'liv',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/l/liverpool/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Manchester City',
            value: 'Manchester City',
            class: 'mnc',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/m/man-city/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Manchester United',
            value: 'Manchester United',
            class: 'mnu',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/m/man-utd/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Newcastle',
            value: 'Newcastle',
            class: 'new',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/n/newcastle/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Queens Park Rangers',
            value: 'Queens Park Rangers',
            class: 'qpr',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/q/qpr/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Southampton',
            value: 'Southampton',
            class: 'shm',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/southampton/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Stoke',
            value: 'Stoke',
            class: 'stk',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/stoke/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Sunderland',
            value: 'Sunderland',
            class: 'sun',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/sunderland/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Swansea',
            value: 'Swansea',
            class: 'swa',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/swansea/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'Tottenham',
            value: 'Tottenham',
            class: 'tot',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/spurs/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'West Bromwich Albion',
            value: 'West Bromwich Albion',
            class: 'wbm',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/w/west-brom/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        },
        {
            label: 'West Ham',
            value: 'West Ham',
            class: 'whm',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/w/west-ham/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
        }
    ];
//    $scope.selectedTeam = $scope.options[-1];
    $scope.selectedTeam = team;
    $scope.update = function () {
        window.localStorage['team'] = $scope.selectedTeam.value;
        window.localStorage['teamImg'] = $scope.selectedTeam.image;
        window.localStorage['teamClass'] = $scope.selectedTeam.class;
        team = window.localStorage['team'] || 'Arsenal';
        teamImg = window.localStorage['teamImg'] || '';
        teamClass = window.localStorage['teamClass'] || '';
    }
}]);

rssApp.factory('FeedService', ['$http', function ($http) {
    return {
        parseFeed: function (url) {
            return $http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + numFeeds + '&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);