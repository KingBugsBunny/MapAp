/* jshint -W117 */
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

    DestinationViewController.$inject = ['$firebaseObject', 'FIREBASE_URL'];

    function DestinationViewController($firebaseObject, FIREBASE_URL) {
        var vm = this;

        var ref = new Firebase(FIREBASE_URL);

        vm.init = init;

        vm.getUserData = getUserData;

        function init() {
            vm.getUserData();
        }

        function getUserData() {
            vm.user = $firebaseObject(ref.child('user'));
        }
    }
})();

