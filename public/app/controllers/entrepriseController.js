/**
 * Created by soofix on 4/20/15.
 */

angular.module('EntrCtrl', []).controller('EntrepriseController',['$scope','EntrepriseService',function($scope,EntrepriseService) {


    $scope.me = 'Hello from MainController';
    $scope.entrepriselist = null;

    $scope.entreprise = {
        activite:"",
        adresseusine:"",
        capital:"",
        delegation:"",
        denomination:"",
        email:"",
        emploi:"",
        fax:"",
        gouvernorat:"",
        latitude:"",
        longitude:"",
        production:"",
        produit:"",
        raisonsociale:"",
        regime:"",
        responsable:"",
        secteur:"",
        telephone:"",
        url:""};

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
    };


    $scope.createNewEntreprise = function(entreprise){

        EntrepriseService.createEntreprise(entreprise,function(data){
            if(data == 200){

                $('#successModal').openModal();
            }else{
                $('#errorModal').openModal();

            }
            console.log(data);

        });
    }


}]);