myApp.directive("weatherDirective", function () {
    return {
        restrict: 'AE'
        , templateUrl: 'directives/weatherresult.html'
        , replace: true
        , scope: {
            wObject: "=",
            toDateFunction: "&",
            toCelsiusFunction: "&"
        }
    };
});