/**
 * Created by Soofix on 13/04/15.
 */
angular.module('appRoutes', []).config(['$routeProvider', function($routeProvider) {

    $routeProvider

        // home page
        .when('/login', {
            templateUrl: 'views/loginForm.html',
            controller: 'LoginController'
        })

        .when('/signup', {
            templateUrl: 'views/signUpForm.html',
            controller: 'SignUpController'
        })

}]);