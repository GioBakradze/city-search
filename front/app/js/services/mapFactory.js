app.factory('mapFactory', function($http, API_URL) {

    function _cityCoordinates(cityName) {
        $http.get(API_URL + '/city/' + cityName).then(function(data) {
            console.log(data.data);
        });
    }

    function _tweets(argument) {
        // body...
    }

    function _recentSearch() {
        return [
            'Tbilisi',
            'London',
            'Moscow',
            'New york'
        ];
    }

    return {
        cityCoordinates: _cityCoordinates,
        tweets: _tweets,
        recentSearch: _recentSearch
    };
});
