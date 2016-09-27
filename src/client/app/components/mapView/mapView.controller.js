/* jshint -W117, -W106*/
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

    MapViewController.$inject = ['$scope', '$firebaseObject', 'FIREBASE_URL', 'NgMap', 'logger'];

    function MapViewController($scope, $firebaseObject, FIREBASE_URL, NgMap, logger) {
        var vm = this;

        var ref = new Firebase(FIREBASE_URL);

        vm.init = init;
        vm.setData = setData;

        function init() {
            var ref = new Firebase(FIREBASE_URL);

            vm.user = $firebaseObject(ref.child('user'));

            NgMap.getMap().then(function (map) {

                //actual map
                vm.map = map;


            }).then(function () {

                vm.map.addListener('mousedown', function (event) {
                    NgMap.getMap().then(function (map) {
                        var legs = map.directionsRenderers[0].directions.routes[0].legs[0];

                        console.log(vm.destinationMarker);

                        vm.user.username = 'Tom Cruise';
                        vm.user.eta = legs.duration.text + ' away';
                        vm.user.origin = legs.start_address;
                        vm.user.destination = legs.end_address;
                        vm.setData();
                    });
                });
            });
        }

        function setData() {
            vm.user.$save();
        }
    }
})();

