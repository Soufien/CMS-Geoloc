/**
 * Created by soofix on 4/20/15.
 */

angular.module('EntrCtrl', ['ngTable']).controller('EntrepriseController',['$scope'
    ,'EntrepriseService','ngTableParams','$filter',function($scope,EntrepriseService,ngTableParams,$filter) {


    $scope.me = 'Hello from MainController';
    $scope.entrepriselist = null;

    $scope.entreprise = {
        id:"",
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
                location: {latitude: 36.803165614732464, longitude: 10.175888061523438},
                radius: 300,
                inputBinding: {
                    latitudeInput: $('#latitude'),
                    longitudeInput: $('#longitude')
                }
            });
        };


        $scope.showLocation = function (latitude,longitude) {
            $('#maps').locationpicker({
                location: {latitude:latitude , longitude: longitude},
                radius: 300
            });
        };
}]);