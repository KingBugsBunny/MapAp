(function () {
    'use strict';

    angular
        .module('app.directives.map')
        .directive('map', mapDirective);

    function mapDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/map/map.html',
            scope: {},
            link: linkFunction,
        };
    }

    function linkFunction(scope, element, attrs) {
        vm.map = { center: { latitude: 37.384032, longitude: -122.067385 }, zoom: 8 };
    }

})();

