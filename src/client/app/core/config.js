(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-top-right';
    }

    var config = {
        appErrorPrefix: '[MapAp Error] ',
        appTitle: 'MapAp'
    };


    firebaseConfigure.$inject = ['FIREBASE_URL'];

    function firebaseConfigure(FIREBASE_URL) {
        var firebaseConfig = {
            apiKey: 'AIzaSyDx-yzCCKW5_g02hDbkuyUi6Dnzh5a-c4w',
            databaseURL: 'https://mapap-ff943.firebaseio.com/'
        };

        firebase.initializeApp(firebaseConfig);
    }

    firebaseConfigure();


    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
    /* @ngInject */
    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});
    }

})();
