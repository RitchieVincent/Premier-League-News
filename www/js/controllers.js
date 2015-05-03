angular.module('footFeeds.controllers', [])









.controller('mainController', function ($scope, $ionicPopup) {

    $scope.selectedTeam = JSON.parse(localStorage.getItem('selectedTeam')) || { //Sets the default team, if none is stored
        label: 'Arsenal',
        value: 'Arsenal',
        class: 'ars',
        image: '../img/arsenal.png',
        facebook: '@Arsenal',
        twitter: '@arsenal',
        instagram: '@arsenal'
    };
    team = $scope.selectedTeam;//Sets the default team, if none is stored
    localStorage.setItem('selectedTeam', JSON.stringify(team));//Sets the default team, if none is stored
    
    
    $scope.moreMenu = function () { //The button on the right side of the nav bar displays a pop-up
        var alertPopup = $ionicPopup.alert({
            cssClass: 'aboutPopup', //Assigns classes to the pop-up box for styling
            title: 'About', //The title displayed in the pop-up
            template: '<p>Ritchie Vincent</p><p>ritchie@ritchievincent.co.uk</p><p>Created using the Ionic framework.</p><p>FootFeeds is still in beta, so bugs will exist.</p><p>&#169; FootFeeds 2015</p>', //The text displayed
            okType: 'waves-effect waves btn-flat popupOk' //Classes applied to the 'ok' button in the pop-up
        });
        alertPopup.then(function (res) { //A function that could be run when the pop-up is closed
            //When popup closed
        });
    }
})









.controller('settingsController', function ($scope, $window) {
    var team;
    $scope.options = [
        {
            label: 'Arsenal',
            value: 'Arsenal',
            class: 'ars',
            image: '../img/arsenal.png',
            facebook: '@Arsenal',
            twitter: '@arsenal',
            instagram: '@arsenal'
        },
        {
            label: 'Aston Villa',
            value: 'Aston Villa',
            class: 'avi',
            image: '../img/aston-villa.png',
            facebook: '@avfcofficial',
            twitter: '@avfcofficial',
            instagram: '@avfcofficial'
        },
        {
            label: 'Burnley',
            value: 'Burnley',
            class: 'bur',
            image: '../img/burnley.png',
            facebook: '@officialburnleyfc',
            twitter: '@burnleyofficial',
            instagram: '@burnleyofficial'
        },
        {
            label: 'Chelsea',
            value: 'Chelsea',
            class: 'che',
            image: '../img/chelsea.png',
            facebook: '@ChelseaFC',
            twitter: '@chelseafc',
            instagram: '@chelseafc'
        },
        {
            label: 'Crystal Palace',
            value: 'Crystal Palace',
            class: 'cpa',
            image: '../img/crystal-palace.png',
            facebook: '@officialcpfc',
            twitter: '@cpfc',
            instagram: '@official_cpfc'
        },
        {
            label: 'Everton',
            value: 'Everton',
            class: 'eve',
            image: '../img/everton.png',
            facebook: '@Everton',
            twitter: '@everton',
            instagram: '@officialeverton'
        },
        {
            label: 'Hull',
            value: 'Hull',
            class: 'hul',
            image: '../img/hull-city.png',
            facebook: '',
            twitter: '@hullcity',
            instagram: '@hullcityofficial'
        },
        {
            label: 'Leicester',
            value: 'Leicester',
            class: 'lei',
            image: '../img/leicester-city.png',
            facebook: '@lcfcofficial',
            twitter: '@officialfoxes',
            instagram: '@officialfoxes'
        },
        {
            label: 'Liverpool',
            value: 'Liverpool',
            class: 'liv',
            image: '../img/liverpool.png',
            facebook: '@LiverpoolFC',
            twitter: '@lfc',
            instagram: '@liverpoolfc'
        },
        {
            label: 'Manchester City',
            value: 'Manchester City',
            class: 'mnc',
            image: '../img/manchester-city.png',
            facebook: '@mcfcofficial',
            twitter: '@mcfc',
            instagram: '@mcfcofficial'
        },
        {
            label: 'Manchester United',
            value: 'Manchester United',
            class: 'mnu',
            image: '../img/manchester-united.png',
            facebook: '@manchesterunited',
            twitter: '@manutd',
            instagram: '@manchesterunited'
        },
        {
            label: 'Newcastle',
            value: 'Newcastle',
            class: 'new',
            image: '../img/newcastle-united.png',
            facebook: '@newcastleunited',
            twitter: '@nufc',
            instagram: '@newcastleunited_official'
        },
        {
            label: 'Queens Park Rangers',
            value: 'Queens Park Rangers',
            class: 'qpr',
            image: '../img/queens-park-rangers.png',
            facebook: '@OfficialQPRFC',
            twitter: '@qprfc',
            instagram: '@officialQPR'
        },
        {
            label: 'Southampton',
            value: 'Southampton',
            class: 'shm',
            image: '../img/southampton.png',
            facebook: '@southamptonfc',
            twitter: '@southamptonfc',
            instagram: '@southamptonfc'
        },
        {
            label: 'Stoke',
            value: 'Stoke',
            class: 'stk',
            image: '../img/stoke-city.png',
            facebook: '@stokecity',
            twitter: '@stokecity',
            instagram: '@stokecity'
        },
        {
            label: 'Sunderland',
            value: 'Sunderland',
            class: 'sun',
            image: '../img/sunderland.png',
            facebook: '@sunderlandafc',
            twitter: '@sunderlandafc',
            instagram: '@sunderlandafcofficial'
        },
        {
            label: 'Swansea',
            value: 'Swansea',
            class: 'swa',
            image: '../img/swansea-city.png',
            facebook: '@SwanseaCityFC',
            twitter: '@swansofficial',
            instagram: '@swansofficial'
        },
        {
            label: 'Tottenham',
            value: 'Tottenham',
            class: 'tot',
            image: '../img/tottenham-hotspur.png',
            facebook: '@TottenhamHotspur',
            twitter: '@spursofficial',
            instagram: '@spursofficial'
        },
        {
            label: 'West Bromwich Albion',
            value: 'West Bromwich Albion',
            class: 'wbm',
            image: '../img/west-bromwich-albion.png',
            facebook: '@westbromwichalbionofficial',
            twitter: '@wbafcofficial',
            instagram: '@officialalbion'
        },
        {
            label: 'West Ham',
            value: 'West Ham',
            class: 'whm',
            image: '../img/west-ham.png',
            facebook: '@westhamunitedofficial',
            twitter: '@whufc_official',
            instagram: '@whufc_official'
        }
    ];
    $scope.selectedTeam = JSON.parse(localStorage.getItem('selectedTeam')) || [];
    team = $scope.selectedTeam;
    $scope.update = function (team) {
        localStorage.setItem('selectedTeam', JSON.stringify(team));
        $window.location.reload(true);
    }
    $scope.filter = { //Sets the default filter to the locall stored filter, defaulting to the All filter if none found
        name: localStorage.filter || ':'
    };
    $scope.updateFilter = function (filter) {
        localStorage.filter = filter.name;
        setTimeout(function(){ $window.location.reload(true); }, 500);
    }
})





.controller('menuController', function ($scope) {
    $scope.selectedTeam = JSON.parse(localStorage.getItem('selectedTeam')) || [];
})









.controller('newsController', ['$scope', 'FeedService', '$ionicLoading', function ($scope, Feed, $ionicLoading) {
    $scope.selectedTeam = JSON.parse(localStorage.getItem('selectedTeam')) || [];
    numFeeds = 5;
    filter = localStorage.filter || ":";
    if (filter == ":") {
        $scope.selectedFilter = "No filter";
    } else if (filter == "injury") {
        $scope.selectedFilter = "Injuries";
    } else if (filter == "transfer") {
        $scope.selectedFilter = "Transfers";
    } else if (filter == "result") {
        $scope.selectedFilter = "Results";
    }

    $scope.feedSrc = 'http://pipes.yahoo.com/pipes/pipe.run?_id=d5af746000fcb3a1606ee8eff37328dd&_render=rss&textinput2=' + filter + '&textinput1=' + $scope.selectedTeam.value + '';

    $scope.loadFeed = function (e) {
        $ionicLoading.show({ //Shows the loading symbol
            template: '<ion-spinner icon="android"></ion-spinner>'
        })
        Feed.parseFeed($scope.feedSrc).then(function (res) {
            $scope.feeds = res.data.responseData.feed.entries;//Navigates the returned JSON object and stores the necessary data in scope
            $ionicLoading.hide();
        });
    };

    $scope.loadFeed(); //Loads the feeds

    $scope.doRefresh = function () {
        numFeeds = numFeeds + 5;
        $scope.loadFeed();
        $scope.$broadcast('scroll.refreshComplete');
    };

    $scope.openLink = function (link) {
        window.open(link, '_blank', 'location=yes');
        return false;
    };

}])









.controller('socialController', function ($scope) {
    $scope.selectedTeam = JSON.parse(localStorage.getItem('selectedTeam')) || [];
    $scope.limitCount = 10;
    runFeed();

    function runFeed() {
        $('.social-feed-container').socialfeed({
            // FACEBOOK
            facebook: {
                accounts: [$scope.selectedTeam.facebook],
                limit: $scope.limitCount,
                access_token: '518974708243806|714ca86870c1e84b58aaf0e77db3893f'
            },
            // Twitter
            twitter: {
                accounts: [$scope.selectedTeam.twitter],
                limit: $scope.limitCount,
                consumer_key: '8YLFmxDdeJezdS8vCl3gZIVhK',
                consumer_secret: 'ign5jdpsYb9tqEegSsbaLclbuZMQDswM5c5MAzhMPZNu8bEpBz',
            },
            // INSTAGRAM
            instagram: {
                accounts: [$scope.selectedTeam.instagram],
                limit: $scope.limitCount,
                client_id: '2362ab9fa5144d40af0bc18bf64a8b79'
            },
            // GENERAL SETTINGS
            length: 140,
            show_media: true,
            // Moderation function - if returns false, template will have class hidden
            moderation: function (content) {
                return (content.text) ? content.text.indexOf('no') == -1 : true;
            },
            //            update_period: 5000,
            // When all the posts are collected and displayed - this function is evoked
            callback: function () {
                console.log('all posts are collected');
            }
        });
    };

    $scope.doRefresh = function () {
        runFeed();
        $scope.$broadcast('scroll.refreshComplete');
    };

})