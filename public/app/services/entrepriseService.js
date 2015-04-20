/**
 * Created by Soofix on 13/04/15.
 */
angular.module('EntService', []).factory('EntrepriseService', ['$http', function($http) {

    return {
        // call to get all account info
            getListEntreprise : function(callback){
            $http.get('/entreprise')
                .success(function(entreprises) {
                    callback(entreprises);
                })
                .error(function(err) {
                    alert(err);
                });
        },

        createEntreprise : function(entreprise,callback){
            $http.post('/entreprise ', entreprise).
                success(function(data, status, headers, config) {
                    callback(data);

                }).
                error(function(data, status, headers, config) {

                });
        }
    }

}]);