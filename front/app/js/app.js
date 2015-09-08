var app = angular.module('CitySearch', ['ui.router']);

app.config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});
