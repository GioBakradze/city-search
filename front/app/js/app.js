// id citysearch-1065
// AIzaSyD3IdidDe-OwnZAP4EHXzTK8EPIpI3-A30
var app = angular.module('CitySearch', [
	'ui.router', 
	'uiGmapgoogle-maps', 
	'ngStorage', 
	'angular-loading-bar'
]);

app.constant('API_URL', 'http://localhost:8000');

app.config(function ($httpProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home/');
    $httpProvider.interceptors.push('tokenInterceptor');
});

app.run(function (tokenFactory) {
    tokenFactory.init();
});
