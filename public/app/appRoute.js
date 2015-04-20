/**
 * Created by Soofix on 13/04/15.
 */
angular.module('appRoutes', []).config(['$routeProvider', function($routeProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'MainController'
        })

        .when('/entreprise/ajouter', {
            templateUrl: 'app/views/forms/ajouterentreprise.html',
            controller: 'EntrepriseController'
        })

        .when('/entreprise/modifier', {
            templateUrl: 'app/views/forms/ajouterentreprise.html',
            controller: 'EntrepriseController'
        })

        .when('/login', {
            templateUrl: 'app/views/loginForm.html',
            controller: 'LoginController'
        })

        .when('/signup', {
            templateUrl: 'app/views/signUpForm.html',
            controller: 'SignUpController'
        })

}]);