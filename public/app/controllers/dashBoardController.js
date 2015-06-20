/**
 * Created by Soofix on 13/04/15.
 */
angular.module('MainCtrl', []).controller('MainController',['$scope','LoginService',
    'EntrepriseService',function($scope,LoginService,EntrepriseService) {


        LoginService.getcurrentuser(function(data){
            if(data == ""){
                window.location.href="#/login";
                $('#acceuil').hide();
                $('#ajoutentreprise').hide();
                $('#listentreprise').hide();
                $('#deconnexionli').hide();

            }else{
                $('#loginli').hide();
                $('#signupli').hide();
                $('#acceuil').show();
                $('#ajoutentreprise').show();
                $('#listentreprise').show();
                $('#deconnexionli').show();
                console.log(data);
            }
        });

    $scope.entrepriselist = null;

    $(document).ready(function(){

    });

    $scope.getListEntreprise = function(){
        EntrepriseService.getListEntreprise(function(entreprises){
            $scope.entrepriselist = entreprises;
            console.log(entreprises);
        });
    };

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

        $scope.logoutUser = function () {
            LoginService.logout(function(data){
                console.log("login return : "+data);
            });

        };

}]);