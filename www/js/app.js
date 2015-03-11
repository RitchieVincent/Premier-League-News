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

    .state('app.socialFeed', {
        cache: false,
        url: "/socialFeed",
        views: {
            'menuContent': {
                templateUrl: "socialFeed.html"
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

rssApp.controller("feedController", ['$scope', 'FeedService', function ($scope, Feed) {
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
        if (numFeeds < 30) { //Stops the scroll going on infinitely
            numFeeds++;
            $scope.$broadcast('scroll.infiniteScrollComplete');
            console.log(numFeeds);
            $scope.loadFeed();
        } else {
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

rssApp.controller('filterRadioController', ['$scope', function ($scope) {
    $scope.color = {
        name: '' //Default value
    };
    $scope.updateFilter = function () {
        window.localStorage['filter'] = $scope.color.name;
    }
}]);

rssApp.controller('socialController', ['$scope', function ($scope) {
    $scope.teamSelect = function () {
        team = window.localStorage['team'] || 'Arsenal';
        teamImg = window.localStorage['teamImg'] || '';
        teamClass = window.localStorage['teamClass'] || '';
        filter = window.localStorage['filter'] || '.';
        teamFacebook = window.localStorage['teamFacebook'] || '@Arsenal';
        teamTwitter = window.localStorage['teamTwitter'] || '@arsenal';
        teamInstagram = window.localStorage['teamInstagram'] || '@arsenal';

        $scope.selectedTeamMsg = 'Your chosen team is ' + team + '.';
        $scope.teamSelected = team;
        $scope.selectedTeamImg = teamImg;
        $scope.selectedTeamClass = teamClass;
        $scope.selectedTeamFacebook = teamFacebook;
        $scope.selectedTeamTwitter = teamTwitter;
        $scope.selectedTeamInstagram = teamInstagram;
        runFeed();
        
        function runFeed(){
            $('.social-feed-container').socialfeed({
                // FACEBOOK
                facebook:{
                    accounts:[$scope.selectedTeamFacebook],
                    limit:2,
                    access_token:'518974708243806|714ca86870c1e84b58aaf0e77db3893f'
                },
                // Twitter
                twitter:{
                    accounts: [$scope.selectedTeamTwitter],
                    limit: 2,
                    consumer_key: '8YLFmxDdeJezdS8vCl3gZIVhK', // make sure to have your app read-only
                    consumer_secret: 'ign5jdpsYb9tqEegSsbaLclbuZMQDswM5c5MAzhMPZNu8bEpBz', // make sure to have your app read-only
                },
                // INSTAGRAM
                instagram:{
                    accounts:[$scope.selectedTeamInstagram],
                    limit:2,
                    client_id:'2362ab9fa5144d40af0bc18bf64a8b79'
                },
                // GENERAL SETTINGS
                length:140,
                show_media:true,
                // Moderation function - if returns false, template will have class hidden
                moderation: function(content){
                    return  (content.text) ? content.text.indexOf('no') == -1 : true;
                },
                //update_period: 5000,
                // When all the posts are collected and displayed - this function is evoked
                callback: function(){
                    console.log('all posts are collected');
                }
            });
        }
    };
}]);

rssApp.controller('teamSelectController', ['$scope', function ($scope) {

    $scope.options = [
        {
            label: 'Arsenal',
            value: 'Arsenal',
            class: 'ars',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/a/arsenal/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@Arsenal',
            twitter: '@arsenal',
            instagram: '@arsenal'
        },
        {
            label: 'Aston Villa',
            value: 'Aston Villa',
            class: 'avi',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/a/aston-villa/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@avfcofficial',
            twitter: '@avfcofficial',
            instagram: '@avfcofficial'
        },
        {
            label: 'Burnley',
            value: 'Burnley',
            class: 'bur',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/b/burnley/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@officialburnleyfc',
            twitter: '@burnleyofficial',
            instagram: '@burnleyofficial'
        },
        {
            label: 'Chelsea',
            value: 'Chelsea',
            class: 'che',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/c/chelsea/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@ChelseaFC',
            twitter: '@chelseafc',
            instagram: '@chelseafc'
        },
        {
            label: 'Crystal Palace',
            value: 'Crystal Palace',
            class: 'cpa',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/c/crystal-palace/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@officialcpfc',
            twitter: '@cpfc',
            instagram: '@official_cpfc'
        },
        {
            label: 'Everton',
            value: 'Everton',
            class: 'eve',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/e/everton/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@Everton',
            twitter: '@everton',
            instagram: '@officialeverton'
        },
        {
            label: 'Hull',
            value: 'Hull',
            class: 'hul',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/h/hull/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '',
            twitter: '@hullcity',
            instagram: '@hullcityofficial'
        },
        {
            label: 'Leicester',
            value: 'Leicester',
            class: 'lei',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/l/leicester/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@lcfcofficial',
            twitter: '@officialfoxes',
            instagram: '@officialfoxes'
        },
        {
            label: 'Liverpool',
            value: 'Liverpool',
            class: 'liv',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/l/liverpool/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@LiverpoolFC',
            twitter: '@lfc',
            instagram: '@liverpoolfc'
        },
        {
            label: 'Manchester City',
            value: 'Manchester City',
            class: 'mnc',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/m/man-city/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@mcfcofficial',
            twitter: '@mcfc',
            instagram: '@mcfcofficial'
        },
        {
            label: 'Manchester United',
            value: 'Manchester United',
            class: 'mnu',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/m/man-utd/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@manchesterunited',
            twitter: '@manutd',
            instagram: '@manchesterunited'
        },
        {
            label: 'Newcastle',
            value: 'Newcastle',
            class: 'new',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/n/newcastle/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@newcastleunited',
            twitter: '@nufc',
            instagram: '@newcastleunited_official'
        },
        {
            label: 'Queens Park Rangers',
            value: 'Queens Park Rangers',
            class: 'qpr',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/q/qpr/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@OfficialQPRFC',
            twitter: '@qprfc',
            instagram: '@officialQPR'
        },
        {
            label: 'Southampton',
            value: 'Southampton',
            class: 'shm',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/southampton/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@southamptonfc',
            twitter: '@southamptonfc',
            instagram: '@southamptonfc'
        },
        {
            label: 'Stoke',
            value: 'Stoke',
            class: 'stk',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/stoke/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@stokecity',
            twitter: '@stokecity',
            instagram: '@stokecity'
        },
        {
            label: 'Sunderland',
            value: 'Sunderland',
            class: 'sun',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/sunderland/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@sunderlandafc',
            twitter: '@sunderlandafc',
            instagram: '@sunderlandafcofficial'
        },
        {
            label: 'Swansea',
            value: 'Swansea',
            class: 'swa',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/swansea/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@SwanseaCityFC',
            twitter: '@swansofficial',
            instagram: '@swansofficial'
        },
        {
            label: 'Tottenham',
            value: 'Tottenham',
            class: 'tot',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/spurs/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@TottenhamHotspur',
            twitter: '@spursofficial',
            instagram: '@spursofficial'
        },
        {
            label: 'West Bromwich Albion',
            value: 'West Bromwich Albion',
            class: 'wbm',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/w/west-brom/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@westbromwichalbionofficial',
            twitter: '@wbafcofficial',
            instagram: '@officialalbion'
        },
        {
            label: 'West Ham',
            value: 'West Ham',
            class: 'whm',
            image: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/w/west-ham/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
            facebook: '@westhamunitedofficial',
            twitter: '@whufc_official',
            instagram: '@whufc_official'
        }
    ];
    //    $scope.selectedTeam = $scope.options[-1];
    $scope.selectedTeam = team;
    $scope.update = function () {
        window.localStorage['team'] = $scope.selectedTeam.value;
        window.localStorage['teamImg'] = $scope.selectedTeam.image;
        window.localStorage['teamClass'] = $scope.selectedTeam.class;
        window.localStorage['teamFacebook'] = $scope.selectedTeam.facebook;
        window.localStorage['teamTwitter'] = $scope.selectedTeam.twitter;
        window.localStorage['teamInstagram'] = $scope.selectedTeam.instagram;
        team = window.localStorage['team'] || 'Arsenal';
        teamImg = window.localStorage['teamImg'] || '';
        teamClass = window.localStorage['teamClass'] || '';
        teamFacebook = window.localStorage['teamFacebook'] || '@Arsenal';
        teamTwitter = window.localStorage['teamTwitter'] || '@arsenal';
        teamInstagram = window.localStorage['teamInstagram'] || '@arsenal';
    }
}]);

rssApp.factory('FeedService', ['$http', function ($http) {
    return {
        parseFeed: function (url) {
            return $http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + numFeeds + '&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);