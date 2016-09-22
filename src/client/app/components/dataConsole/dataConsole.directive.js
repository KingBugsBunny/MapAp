(function () {
    'use strict';

    angular
        .module('app.components.dataConsole')
        .directive('dataConsole', dataConsoleDirective);

    function dataConsoleDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/dataConsole/dataConsole.html',
            scope: {},
            controller: DataConsoleController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    DataConsoleController.$inject = [];

    function DataConsoleController() {
        var vm = this;


            vm.onInit = onInit;


        function onInit() {
            vm.username = 'BRABRABRABRABRA';
            vm.eta = '20 minutes';
            vm.destination = "Eric Andre/'s house"
        }
    }

})();

