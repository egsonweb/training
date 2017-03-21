(function() {
  angular
    .module('moviesApp')
    .controller('MoviesCtrl', MoviesCtrl);

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
          ABC.getMovies(vm.movieName).then(function(response) {
              vm.loading = false;
              vm.moviesList = response.data.results;
              vm.movieName = '';
          });
      }
  }
})();
