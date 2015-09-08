app.controller('home', function($scope) {
    console.log('home controller in action');

    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };
    
});
