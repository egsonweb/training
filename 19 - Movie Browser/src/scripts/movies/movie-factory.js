(function() {
  angular
    .module('moviesApp')
    .factory('ABC', MovieFactory);

  function MovieFactory($http) {
      var API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=d257c9e25c34810d8264fbd02a8cee03&query=';
      return {
          getMovies: function(name) {
              var movieUrl = API_URL + name;
              return $http.get(movieUrl)
          },
          listMovies: function() {
            console.log('Listing movies');
          }
      };
  }
})();
