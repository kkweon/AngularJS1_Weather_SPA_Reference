// MODULE
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

// OpenWeatherMap
// API call: http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY}
// my API Key: 60629af80899dcd1df8f0a1cd03f9506

// ROUTING
// HOMEPAGE and FORECAST PAGE
myApp.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        
        templateUrl: 'templates/main.html',
        controller: 'mainController'
        
    })
    
    .when("/forecast", {
        
        templateUrl: 'templates/forecast.html',
        controller: 'forecastController'
    })
    
    .when("/forecast/:cnt", {
        
        templateUrl: 'templates/forecast.html',
        controller: 'forecastController'
    });
});

