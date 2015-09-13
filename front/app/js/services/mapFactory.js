app.factory('mapFactory', function($http, API_URL, $q) {

    function _city(cityName) {
        var def = $q.defer();
        $http.get(API_URL + '/city/' + cityName).then(function(data) {
            if (data.data === 'CITY_NOT_FOUND') {
                def.reject('City with this name was not found');
            } else {
                def.resolve(data.data);
            }
        });

        return def.promise;
    }

    function _recentSearch() {
        var def = $q.defer();
        $http.get(API_URL + '/history').then(function(data) {
            def.resolve(data.data);
        });
        return def.promise;
    }

    return {
        city: _city,
        recentSearch: _recentSearch
    };
});
