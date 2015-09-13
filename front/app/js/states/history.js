app.controller('history', function ($scope, mapFactory) {

    $scope.recentSearch = []; 

    // to display space character containing
    // city names
    $scope.display = function (item) {
    	return window.decodeURIComponent(item);
    };

    mapFactory.recentSearch().then(function (data) {
    	$scope.recentSearch = data;
    });

});
