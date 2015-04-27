angular.module('footFeeds.services', [])

.factory('FeedService', ['$http', function ($http) {
    return {
        parseFeed: function (url) {
            var q = $http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + numFeeds + '&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
            return q;
        }
    }
}])