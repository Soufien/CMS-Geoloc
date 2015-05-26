/**
 * Created by Soofix on 13/04/15.
 */
angular.module('MainCtrl', []).controller('MainController',['$scope','EntrepriseService',function($scope,EntrepriseService) {


    $scope.me = 'Hello from MainController';
    $scope.entrepriselist = null;


    $(document).ready(function(){
    });

    $scope.getListEntreprise = function(){
        EntrepriseService.getListEntreprise(function(entreprises){
            $scope.entrepriselist = entreprises;
            console.log(entreprises);

        });
    }

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

}]);