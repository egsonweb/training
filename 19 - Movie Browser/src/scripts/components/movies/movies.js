(function() {
   angular
      .module('moviesApp', [])
      .directive('todoEscape', todoEscape)
      .component('movies', movies);

  function todoEscape() {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        var $elem = angular.element(elem);
        $elem.on('keyup', function(e) {
          if (e.keyCode === 27) {
            console.log($elem.val(''));
          }
        })
      }
    };
  }


  function movies() {
      return {
          restrict: 'E',
          templateUrl: 'js/templates/movies.html',
          controller: MoviesCtrl
      }
  }

  function MoviesCtrl(ABC, $timeout) {
    var vm = this;
    vm.movieName = '';
    vm.moviesList = [];
    vm.loading = false;
    vm.printMovieName = printMovieName;
    vm.clickBtn = clickBtn;

    function clickBtn() {
      ABC.listMovies();
    }

    function printMovieName() {
        vm.loading = true
        $timeout(function() {
          ABC.getMovies(vm.movieName).then(function(response) {
              vm.loading = false;
              vm.moviesList = response.data.results;
              vm.movieName = '';
          });
        }, 3000);

    }
  }
})();
