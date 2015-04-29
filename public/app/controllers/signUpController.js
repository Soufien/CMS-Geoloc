/**
 * Created by Soofix on 13/04/15.
 */
angular.module('SignUpCtrl', []).controller('SignUpController',['$scope','SIgnUpService',function($scope,SIgnUpService) {


    $scope.me = 'Hello from SignUpController';


    $scope.user = {
        username:"Soufien",
        password:"pass",
        confirmPassword:"dd",
        email:"hidouri@mail.com",
        firstName:"Soufien",
        lastName:"Hidouri"
    };

    $scope.signUpUser = function(){
      if($scope.user.password!=$scope.user.confirmPassword){

          console.log($scope.user.password);
          console.log($scope.user.confirmPassword);
      }else{
          SIgnUpService.signUpaUser($scope.user,function(status){
              console.log(status);
          });
      }

    };



}]);