app.controller('home', function($scope, $state, $stateParams, mapFactory, $localStorage) {

    $scope.map = {
        center: {
            latitude: 13.7563309,
            longitude: 100.5017651
        },
        zoom: 10
    };

    $scope.markers = [];

    $scope.history = function () {
    	$state.go('history');
    };

    $scope.search = function (validate) {
    	if ($scope.city.trim().length === 0)  {
    		 if(validate) alert('Please type city name');
    		return;
    	}

    	mapFactory.city($scope.city).then(function (data) {
            $scope.map.center.latitude = data.map.results[0].geometry.location.lat;
            $scope.map.center.longitude = data.map.results[0].geometry.location.lng;

            // create new markers array
            var marks = [];
            var added = {};

            angular.forEach(data.tweets.statuses, function  (e, i) {
                if (e.geo !== null && !added.hasOwnProperty(e.geo.coordinates[0] + ',' + e.geo.coordinates[1])) {
                    marks.push({
                        coords: {
                            latitude: e.geo.coordinates[0],
                            longitude: e.geo.coordinates[1]
                        },
                        title: e.text,
                        id: i,
                        show: false,
                        image: e.user.profile_image_url
                    });

                    added[e.geo.coordinates[0] + ',' + e.geo.coordinates[1]] = true;
                }
            });

            $scope.markers = marks;
        }, function (msg) {
            alert(msg);
        });
    };

    $scope.city = $stateParams.cityName;

    // run search for the first time
    $scope.search();
});
