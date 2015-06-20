/**
 * Created by Soofix on 13/04/15.
 */
angular.module('LoginSrv', []).factory('LoginService', ['$http', function($http) {

    return {

        login : function(username, password, callback){
            $http.post('/users/login', {username:username,password:password})
                .success(function(data) {
                    callback(data);
                })
                .error(function(err) {
                    alert(err);
                });
        },

        getcurrentuser : function(callback){
            $http.get('/users/me')
                .success(function (user) {
                    callback(user);
                });

        },
        logout : function(callback){
            $http.post('/users/logout')
                .success(function(data) {
                    callback(data);
                })
                .error(function(err) {
                    alert(err);
                });
        },
        currentUser : function(callback){
            $http.get('/users/me ')
                .success(function(entreprises) {
                    callback(entreprises);
                })
                .error(function(err) {
                    alert(err);
                });
        },
    }

}]);