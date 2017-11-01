// CITY SERVICE
myApp.service('cityService', function() {
    var self = this;
    self.city = 'Seoul, KR';
});

myApp.service('weatherService', ['$resource', function($resource) {

    this.getWeather = function(cityText, cnt) {

        var myAPIkey = '60629af80899dcd1df8f0a1cd03f9506';
        var weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast/daily", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        return weatherAPI.get({
            q: cityText,
            cnt: cnt,
            APPID: myAPIkey
        });

    }

}]);
