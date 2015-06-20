/**
 * Created by soofix on 4/20/15.
 */

angular.module('EntrCtrl', ['ngTable']).controller('EntrepriseController',['$scope' , 'LoginService'
    ,'EntrepriseService','ngTableParams','$filter',function($scope, LoginService, EntrepriseService,ngTableParams,$filter) {

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

        $scope.deletEntreprise = function(entreprise){

            $('#alertmodal').openModal();
            $scope.deletedentreprise = entreprise.id;
        };

        $scope.confirmDelete = function(entrepriseid){

            console.log(entrepriseid);
            EntrepriseService.supprimerEntreprise(entrepriseid, function(status){

                if(status == 200){
                    $("."+entrepriseid).remove();
                    Materialize.toast('Entreprise supprimé avec success', 4000);
                }
             });
        };

        $scope.updateEntreprise = function(entreprise){
            console.log(entreprise.id);
            $scope.entreprise = entreprise;
            $('#modal3').openModal();

            //EntrepriseService.updateEntreprise(entrepriseid, function(data){
            //
            //});
        };

        $scope.createNewEntreprise = function(){
            console.log($scope.entreprise);

        EntrepriseService.createEntreprise($scope.entreprise,function(data){
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

        $scope.logoutUser = function () {
            LoginService.logout(function(data){
                console.log("login return : "+data);
                window.location.href="#/login";

            });

        };
}]);