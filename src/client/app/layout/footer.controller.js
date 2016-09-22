(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('footer', footerDirective);

    /* @ngInject */
    function footerDirective () {
        return {
            restrict: 'E',
            templateUrl: 'app/layout/footer.html',
            scope: {},
            controller: FooterController,
            controllerAs: 'vm',
            bindToController: true
        };

        /* @ngInject */
        function FooterController() {
            var vm = this;

        }
    }
})();
