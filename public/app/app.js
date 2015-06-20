/**
 * Created by Soofix on 13/04/15.
 */
angular.module('myGeolocCms', ['ngRoute', 'appRoutes', 'MainCtrl','LoginCtrl',
    'SignUpCtrl','EntrCtrl','EntService','LoginSrv',
    'SignUpSrv']).config(function($httpProvider){
    $httpProvider.defaults.withCredentials = true;
}).controller('dashController',['$scope','SIgnUpService', 'LoginService'
    ,function($scope,SIgnUpService, LoginService) {
        $scope.logoutUser = function () {
            console.log("login return : ");
            LoginService.logout(function(data){
                console.log("login return : "+data);
                window.location.href="#/login";
            });
        };
    }]);
$(document).ready(
    function(){

        // Side bar event listener
    });