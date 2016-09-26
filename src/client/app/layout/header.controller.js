(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('header', headerDirective);

    /* @ngInject */
    function headerDirective () {
        return {
            restrict: 'E',
            templateUrl: 'app/layout/header.html',
            link: LinkFunction,
            scope: {}
        };

        function LinkFunction($scope, APP_TITLE) {
            var vm = this;

            $scope.title = APP_TITLE;

        }
    }
})();
