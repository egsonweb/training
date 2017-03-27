(function() {
   angular
      .module('moviesApp', [])
      .directive('movies', movies);

  function movies() {
      return {
          restrict: 'E',
          templateUrl: 'js/templates/movies.html'
      }
  }
})();
