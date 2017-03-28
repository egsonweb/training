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
                    template: '<h2>Movies</h2>'
                })
                .otherwise({
                    template: '<not-found></not-found>'
                });
        })
})();
