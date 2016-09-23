/* jshint -W117, -W030 */
(function () {
    'use strict';

    describe('Component: MapView', function () {
        var vm,
            element,
            baseMock;

        beforeEach(function () {
            bard.appModule('app.components.mapView');

            bard.inject(
                '$q',
                '$compile',
                '$rootScope',
                '$templateCache',
                '$state'
            );
        });

        beforeEach(function () {
            var html = '<map-view></map-view> ';

            $rootScope = $rootScope.$new();

            $templateCache.put('app/components/mapView/mapView.html', '');

            element = $compile(html)($rootScope);

            $rootScope.$digest();

            vm = element.controller('mapView');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should be able to be created', function () {
            expect(element).to.be.defined;
            expect(vm).to.be.defined;
        });
    });
})();
