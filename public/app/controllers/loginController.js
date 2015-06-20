/**
 * Created by Soofix on 13/04/15.
 */
angular.module('LoginCtrl', []).controller('LoginController', ['$scope', 'LoginService', '$rootScope', '$location',
    function ($scope, LoginService, $rootScope, $location) {
        // reset login status


        LoginService.getcurrentuser(function(data){
            if(data == ""){
                $('#deconnexionli').hide();
                $('#acceuil').hide();
                $('#ajoutentreprise').hide();
                $('#listentreprise').hide();
                $('#loginli').show();
                $('#signupli').show();

            }else{
                window.location.href="#/";
                console.log(data);
            }
        });

        $scope.user = {
            password : "",
            username : ""
        };

        $scope.login = function () {
            LoginService.login($scope.user.username, $scope.user.password, function(data){
                console.log("login return : "+data);

                if(data == ""){
                }else{
                    window.location.href="#/";
                    console.log(data);
                }
            });
        };

        $scope.getcurrentuser = function () {
            LoginService.getcurrentuser(function(data){
                console.log("login return : "+data);
            });
        };

        $scope.logoutUser = function () {
            LoginService.logout(function(data){
                console.log("login return : "+data);
            });

        };

    }]);