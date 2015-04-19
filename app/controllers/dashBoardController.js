/**
 * Created by Soofix on 13/04/15.
 */
angular.module('MainCtrl', []).controller('MainController',['$scope','EntrepriseService',function($scope,EntrepriseService) {


    $scope.me = 'Hello from MainController';

    $scope.getListEntreprise = function(){
        EntrepriseService.getListEntreprise(function(entreprises){
            console.log(entreprises[1].secteur);

        });
    }

}]);