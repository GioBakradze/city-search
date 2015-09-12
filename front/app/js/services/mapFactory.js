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
        return [
            'Tbilisi',
            'London',
            'Moscow',
            'New york'
        ];
    }

    return {
        city: _city,
        recentSearch: _recentSearch
    };
});
