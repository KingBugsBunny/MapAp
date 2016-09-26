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
        vm.dragStart = dragStart;
        vm.clicked = clicked;

        function init() {
            var ref = new Firebase(FIREBASE_URL);

            vm.user = $firebaseObject(ref.child('user'));



            NgMap.getMap().then(function(map) {
                console.log(map.directionsRenderers[0]);

                //actual map
                vm.map = map;

                //vm.user.origin = map.directionsRenderers[0].origin;
                //vm.user.destination = map.directionsRenderers[0].directions.routes[0].legs[0].end_location.end_location;



            }).then(function(){
                vm.map.addListener('mouseup', function(event){
                    NgMap.getMap().then(function(map) {
                        var legs = map.directionsRenderers[0].directions.routes[0].legs[0];

                        vm.user.username = 'Tom Cruise';
                        vm.user.eta = legs.duration.text + ' away';
                        vm.user.origin = legs.start_address;
                        vm.user.destination = legs.end_address;
                        setData();
                    });
                });
            });



        }

        function setData() {
            vm.user.$save();
        }

        function dragStart() {
            console.log('drag fired');
        }

        function clicked () {
            console.log('click fired');

        }
    }
})();

