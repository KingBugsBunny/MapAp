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

    DestinationViewController.$inject = ['FireBaseService', 'logger'];

    function DestinationViewController(FireBaseService, logger) {
        var vm = this;

        vm.init = init;
        vm.getFirebaseData = getFirebaseData;

        function init() {

            vm.getFirebaseData();

        }

        function getFirebaseData() {

            var data = FireBaseService.load()
            vm.user = data.user;

            console.log(vm.user);
        }
    }
})();

