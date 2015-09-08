app.config(function($stateProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/js/states/home.html',
            controller: 'home'
        })
        .state('history', {
            url: '/history',
            templateUrl: '/js/states/history.html',
            controller: 'history'
        });

});
