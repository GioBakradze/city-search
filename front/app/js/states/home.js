app.controller('home', function($scope, $state, $stateParams, mapSvc) {
    console.log('home controller in action ' + $stateParams.cityName);

    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };

    $scope.history = function () {
    	$state.go('history');
    };

    $scope.search = function (validate) {
    	if ($scope.city.trim().length === 0)  {
    		 if(validate) alert('Please type city name');
    		return;
    	}

    	// perform search
    };

    $scope.city = $stateParams.cityName;

    // run search for the first time
    $scope.search();
});
