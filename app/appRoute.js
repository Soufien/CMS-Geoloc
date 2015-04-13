/**
 * Created by Soofix on 13/04/15.
 */
angular.module('appRoutes', []).config(['$routeProvider', function($routeProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'app/views/cmsMainView.html',
            controller: 'MainController'
        })

        .when('/test1', {
            templateUrl: 'app/views/cmsMainView.html',
            controller: 'MainController'
        })

        .when('/test2', {
            templateUrl: 'app/views/cmsMainView.html',
            controller: 'MainController'
        })

        .when('/test3', {
            templateUrl: 'app/views/cmsMainView.html',
            controller: 'MainController'
        })

        .when('/test4', {
            templateUrl: 'app/views/cmsMainView.html',
            controller: 'MainController'
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