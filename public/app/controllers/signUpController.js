/**
 * Created by Soofix on 13/04/15.
 */
angular.module('SignUpCtrl', []).controller('SignUpController',['$scope','SIgnUpService', 'LoginService'
    ,function($scope,SIgnUpService, LoginService) {

        LoginService.getcurrentuser(function(data){
            if(data == ""){
                $('#acceuil').hide();
                $('#ajoutentreprise').hide();
                $('#listentreprise').hide();
                $('#deconnexionli').hide();

            }else{
                console.log(data);
                $('#loginli').hide();
                $('#signupli').hide();
                window.location.href="#/";
            }
        });

    $scope.me = 'Hello from SignUpController';


    $scope.user = {
        username:"",
        password:"",
        confirmPassword:"",
        email:"",
        firstName:"",
        lastName:""
    };

    $scope.signUpUser = function(){
      if($scope.user.password!=$scope.user.confirmPassword){

          console.log($scope.user.password);
          console.log($scope.user.confirmPassword);
      }else{
          SIgnUpService.signUpaUser($scope.user,function(status){

              console.log(status);
              if(status == 200){
                  Materialize.toast('Utilisateur inscrit avec success', 4000);
              }else if(status == 400){
                  Materialize.toast('Utilisateur existe deja !!', 4000);
              }
          });
      }

    };



}]);