(function() {
    angular
        .module('app', ['moviesApp', 'ngAnimate', 'ngRoute'])
        .directive('notFound', function() {
            return {
                restrict: 'E',
                templateUrl: 'js/templates/not-found.html'
            }
        })
        .directive('sidebar', function() {
            return {
                restrict: 'E',
                templateUrl: 'js/templates/sidebar.html'
            }
        })
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<h1>Hello there!</h1>'
                })
                .when('/movies', {
                    template: '<movies title="Search here!"></movies>'
                })
                .otherwise({
                    template: '<not-found></not-found>'
                });
        })
})();
