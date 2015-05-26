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
        url:""
    };


    $scope.step = 1;

    $scope.nextStep = function(){
        $scope.step++;
    };

    $scope.prevStep = function(){
        $scope.step--;
    };

    $scope.submitForm = function(){

    };


    $scope.getListEntreprise = function(){
        EntrepriseService.getListEntreprise(function(entreprises){



                $scope.tableParams = new ngTableParams({
                    page: 1,            // show first page
                    count: 4
                }, {
                    total: entreprises.length, // length of data
                    getData: function($defer, params) {
                        // use build-in angular filter
                        var orderedData = params.filter() ?
                            $filter('filter')(entreprises, params.filter()) :
                            entreprises;

                        $scope.actions = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                        params.total(orderedData.length); // set total for recalc pagination
                        $defer.resolve($scope.actions);
                    }
                });



        });
    };

    $scope.createNewEntreprise = function(entreprise){

        EntrepriseService.createEntreprise(entreprise,function(data){
            if(data == 200){

                Materialize.toast('Une nouvelle entreprise s\'est ajoutée avec success', 4000);
            }else{
                Materialize.toast('Une erreur s\'est produite lors de l\'ajout d\'une entreprise', 4000);

            }
            console.log(data);

        });
    };

    $scope.initMap = function () {
        $('#maps').locationpicker({
            location: {latitude: 46.15242437752303, longitude: 2.7470703125},
            radius: 300,
            inputBinding: {
                latitudeInput: $('#latitude'),
                longitudeInput: $('#longitude')
            }
        });
    };
}]);