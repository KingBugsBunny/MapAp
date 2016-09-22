(function () {
    'use strict';

    angular
        .module('app.features.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'logger'];
    /* @ngInject */
    function DashboardController($q, logger) {
        var vm = this;

    }
})();
