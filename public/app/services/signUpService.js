/**
 * Created by Soofix on 13/04/15.
 */
angular.module('SignUpSrv', []).factory('SIgnUpService', ['$http', function($http) {

    return {

        signUpaUser : function(user,callback){
            $http.post('/users ', user).
                success(function(data, status, headers, config) {
                    callback(status);

                }).
                error(function(data, status, headers, config) {

                });
        }
    }

}]);