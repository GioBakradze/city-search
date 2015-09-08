var app = angular.module('CitySearch', ['ui.router', 'uiGmapgoogle-maps']);

app.config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});
