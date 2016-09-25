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

    MapViewController.$inject = ['$scope', '$firebaseObject', 'FIREBASE_URL', 'NgMap'];

    function MapViewController($scope, $firebaseObject, FIREBASE_URL, NgMap) {
        var vm = this;

        var ref = new Firebase(FIREBASE_URL);

        vm.init = init;
        vm.setData = setData;

        function init() {
            var ref = new Firebase(FIREBASE_URL);

            vm.map = $firebaseObject(ref.child('user'));


            vm.map.username = 'Tom Cruise';
            vm.map.eta = 20;
            vm.map.zoom = 2;
            vm.map.travelMode = 'DRIVING';
            vm.map.origin = [37.779095, -122.390353];
            vm.map.destination = [37.803773, -122.271539];

            vm.setData();
        }

        $scope.$watch('ngMap', function(newValue, oldValue) {

        });

        function setData() {
            vm.map.$save();
        }
    }
})();

