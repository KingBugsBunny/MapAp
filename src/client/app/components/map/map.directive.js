(function () {
    'use strict';

    angular
        .module('app.components.map')
        .directive('map', mapDirective);

    function mapDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/map/map.html',
            scope: {},
            controller: MapController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    MapController.$inject = ['uiGmapgoogle-maps'];

    function MapController(uiGmapgoogle-maps) {
        var vm = this;

        vm.map = { center: { latitude: 37.384032, longitude: -122.067385 }, zoom: 8 };
    }

})();

