var app = angular.module('CitySearch', ['ui.router', 'uiGmapgoogle-maps']);

app.config(function ($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home/');
});
