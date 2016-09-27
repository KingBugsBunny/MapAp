/* jshint -W106 */
var mocks = mocks || {};

(function(mocks) {
    'use strict';

    mocks.firebaseObjectMock = function() {
        return {
            getUserData: getUserData
        };

        function getUserData() {
            return {
                origing: 'Mexico',
                destination: 'France',
                eta: '16 hours away',
                username: 'Urien'
            }
        }
    };
})(mocks);
