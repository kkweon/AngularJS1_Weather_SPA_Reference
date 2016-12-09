// OpenWeatherMap
// API call: http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=60629af80899dcd1df8f0a1cd03f9506
// my API Key: 60629af80899dcd1df8f0a1cd03f9506
// http://api.openweathermap.org/data/2.5/forecast/weather?q=Seoul, KR&APPID=60629af80899dcd1df8f0a1cd03f9506
// Controller for Homepage
myApp.controller('mainController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {
    $scope.cityText = cityService.city;
    $scope.$watch('cityText', function () {
        cityService.city = $scope.cityText;
    });

    $scope.submit = function () {
        $location.path('/forecast');
    };
}]);

// Controller for Forecast page
myApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function ($scope, $routeParams, cityService, weatherService) {
    $scope.cityText = cityService.city;

    $scope.cnt = $routeParams.cnt || '2';
                                        
    $scope.weatherResult = weatherService.getWeather($scope.cityText, $scope.cnt);
    
    $scope.convertToFahrenheit = function (degK) {

        return Math.round(1.8 * (degK - 273) + 32);

    };

    $scope.toCelsius = function (degk) {
        return (+(degk - 273.15).toFixed(2));
    };

    $scope.toDate = function (dt) {
        var date = new Date(dt * 1000);

        return date;
    };




}]);