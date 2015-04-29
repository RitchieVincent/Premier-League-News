angular.module('footFeeds.controllers', [])









    .controller('mainController', function ($scope, $ionicPopup) {

    $scope.moreMenu = function () { //The button on the right side of the nav bar displays a pop-up
        var alertPopup = $ionicPopup.alert({
            cssClass: 'favouritePopup aboutPopup', //Assigns classes to the pop-up box for styling
            title: 'About', //The title displayed in the pop-up
            template: '<p>Ritchie Vincent</p><p>ritchie@ritchievincent.co.uk</p><p>Created using the Ionic framework.</p><p>&#169; FootFeeds 2015</p>', //The text displayed
            okType: 'waves-effect waves btn-flat' //Classes applied to the 'ok' button in the pop-up
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
    $scope.selectedTeam = JSON.parse(localStorage.getItem('selectedTeam')) || [];
    team = $scope.selectedTeam;
    $scope.update = function (team) {
        localStorage.setItem('selectedTeam', JSON.stringify(team));
        $window.location.reload(true);
    }
    $scope.updateFilter = function (filter) {
        localStorage.filter = filter.name;
        $window.location.reload(true);
    }
})





.controller('menuController', function ($scope) {
    $scope.selectedTeam = JSON.parse(localStorage.getItem('selectedTeam')) || [];
})









.controller('newsController', ['$scope', 'FeedService', '$ionicLoading', function ($scope, Feed, $ionicLoading) {
    $scope.selectedTeam = JSON.parse(localStorage.getItem('selectedTeam')) || [];
    numFeeds = 5;
    filter = localStorage.filter || "all";

    $scope.feedSrc = 'http://pipes.yahoo.com/pipes/pipe.run?_id=d5af746000fcb3a1606ee8eff37328dd&_render=rss&textinput2=' + filter + '&textinput1=' + $scope.selectedTeam.value + '';

    $scope.loadFeed = function (e) {
        $ionicLoading.show({ //Shows the loading symbol
            template: '<ion-spinner icon="android"></ion-spinner>'
        })
        Feed.parseFeed($scope.feedSrc).then(function (res) {
            $scope.feeds = res.data.responseData.feed.entries;
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
    
//    $scope.hideCards = function (event) {
//        $(event.target).addClass('hideMe');
//    };
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