(function(){
    'use strict';

    angular
        .module('app.components.mapView.ngMap')
        .controller('ngMap', ngMapDirective);

        function ngMapDirective (){

        return {
            restrict: 'E',
            templateUrl: '<map></map>',
            controller: NgMapController,
            controllerAs: 'vm',
            bindToController: true
        };

     function NgMapController (){

     }
    }
})();
