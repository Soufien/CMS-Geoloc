/**
 * Created by soofix on 4/20/15.
 */

angular.module('EntrCtrl', []).controller('EntrepriseController',['$scope','EntrepriseService',function($scope,EntrepriseService) {


    $scope.me = 'Hello from MainController';
    $scope.entrepriselist = null;

    $scope.entreprise = {

        denomination:"",
        raisonsociale:"",
        responsable:"",
        activite:"",
        produit:"",

        adresseusine:"",
        gouvernorat:"",
        delegation:"",
        tel:"",
        fax:"",
        mail:"",
        url:"",
        regime:"",
        pays:"",
        annee:"",
        capital:"",
        emploi:"",
        latitude:"",
        longitude:""

    };

    $(document).ready(function(){
        $('.collapsible').collapsible({
            accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });

    });


    $scope.getListEntreprise = function(){
        EntrepriseService.getListEntreprise(function(entreprises){
            $scope.entrepriselist = entreprises;
            console.log(entreprises);

        });
    }


}]);