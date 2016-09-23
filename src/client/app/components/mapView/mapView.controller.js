(function () {
    'use strict';

    angular
        .module('app.components.mapView')
        .directive('mapView', mapViewDirective);

    function mapViewDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/mapView/mapView.html',
            scope: {},
            controller: MapViewController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    MapViewController.$inject = [];

    function MapViewController() {
        var vm = this;

        //ngMap.getMap().then(function (map) {
        //    console.log(map.getCenter());
        //    console.log('markers', map.markers);
        //    console.log('shapes', map.shapes);
        //});

        //Sunnyvale
        vm.map = {
            center : [37.775049, -122.354518],
            zoom : 11
        };
    }
})();

