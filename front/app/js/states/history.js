app.controller('history', function ($scope, mapSvc) {
    console.log('history controller in action');

    $scope.recentSearch = mapSvc.recentSearch();

});
