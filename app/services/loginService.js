/**
 * Created by Soofix on 13/04/15.
 */
angular.module('LoginSrv', []).factory('LoginService', ['$http', function($http) {

    return {
        // call to get all account info
        createBalise : function(newData, callback) {

            $http.post('/entreprise', newData).
                success(function(data, status, headers, config) {
                    callback(data);

                }).
                error(function(data, status, headers, config) {

                });
        },

        updateBalise : function(newData, callback) {

            $http.post('/home/balise/updateBalise', newData).
                success(function(data, status, headers, config) {
                    callback(data);

                }).
                error(function(data, status, headers, config) {

                });
        }
    }

}]);