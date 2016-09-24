(function () {
    'use strict';

    angular.module('app.services')
        .factory('FireBaseService', FireBaseService);

    FireBaseService.$inject = ['$firebaseObject'];

    function FireBaseService($firebaseObject) {

        return {
            save: save,
            load: load
        };


        function save(map) {
            //userRef.$add({
            //    destination: map.destination,
            //    origin: map.origin
            //});
        }

        function load() {
            var ref = firebase.database().ref();

            return  $firebaseObject(ref);
        }
    }
})();
