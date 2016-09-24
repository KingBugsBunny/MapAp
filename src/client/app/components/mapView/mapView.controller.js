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

    MapViewController.$inject = ['$scope','FireBaseService'];

    function MapViewController($scope, FireBaseService) {
        var vm = this;


        vm.init = init;

        function init() {
            vm.map = {
                center : [37.775049, -122.354518],
                zoom : 2,
                travelMode: 'DRIVING',
                origin:  [37.779095, -122.390353],
                destination: [37.803773, -122.271539],
                wayPoints: []
            }
        }

        //$scope.$watch('vm.map', function(FireBaseService){
        //    FireBaseService.save(vm.map);
        //});

        $scope.$on('drag', function(event){
            console.log(event);
        });
    }
})();

