(function() {
    angular
        .module('moviesBrowser', [])
        .directive('movies', movies)
        .controller('MoviesCtrl', MoviesCtrl);

    function movies() {
        return {
            restrict: 'E',
            templateUrl: 'js/templates/movies.html'
        }

    }

    function MoviesCtrl($http, $timeout) {
        var vm = this;
        vm.movieName = '';
        vm.moviesList = [];
        vm.loading = false;
        vm.printMovieName = printMovieName

        var API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=d257c9e25c34810d8264fbd02a8cee03&query=';


        function printMovieName() {
            var movieUrl = API_URL + vm.movieName;
            vm.loading = true
            $http.get(movieUrl).then(function (response) {
                vm.movieName = '';
                $timeout(function() {
                    vm.moviesList = response.data.results;
                    vm.loading = false;
                }, 3000);
            });
        }
    }
})();

