app.controller('history', function ($scope, mapFactory) {
    console.log('history controller in action');

    $scope.recentSearch = mapFactory.recentSearch();

});
