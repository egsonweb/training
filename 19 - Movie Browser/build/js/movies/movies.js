(function() {
   angular
      .module('moviesApp', [])
      .filter('truncate', truncateFilter)
      .directive('movies', movies);

  function truncateFilter() {
    return function (value) {
      return value.length > 5 ? value.substr(5)+'...' : value;
    };
  }

  function movies() {
      return {
          restrict: 'E',
          templateUrl: 'js/templates/movies.html'
      }
  }
})();
