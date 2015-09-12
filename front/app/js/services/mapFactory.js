app.factory('mapFactory', function($http, API_URL, $q) {

    function _cityCoordinates(cityName) {
        var def = $q.defer();
        $http.get(API_URL + '/city/' + cityName).then(function(data) {
            if (data.data.status === 'ZERO_RESULTS') {
                def.reject('City with this name was not found');
            } else {
                def.resolve(data.data.results);
            }
        });

        return def.promise;
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
