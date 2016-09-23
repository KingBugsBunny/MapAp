(function () {
    'use strict';

    angular
        .module('app.components.destinationView')
        .directive('destinationView', destinationViewDirective);

    function destinationViewDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/destinationView/destinationView.html',
            scope: {},
            controller: DestinationViewController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    function DestinationViewController() {
        var vm = this;

        vm.init = init;
        vm.getFirebaseData = getFirebaseData;

        function init() {
            vm.user = {
                username: 'Joe Nobody',
                eta: '20 minutes',
                destination: 'Eric Andre\'s house'
            };

            vm.getFirebaseData();
        }

        function getFirebaseData() {
            //TODO: add service calls
        }
    }
})();

