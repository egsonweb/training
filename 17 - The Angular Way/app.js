/*
$(document).ready(function() {
    var $ul = $('#wrapper > ul')
    var $btn  $('#btn-add');

    $btn.on('click', function() {
        var $li = $('<li />');
        $li.text(Math.floor(1+Math.random())*0x10000);

        $ul.append($li);
    })
})*/

angular
    .module('todos', [])
    .controller('MainController', function($rootScope) {
        $rootScope.$on('clicked:two', function(scope, data) {
            $rootScope.$broadcast('clicked:one', data);
        });
    })
    .controller('oneController', function($scope) {
        $scope.name = "ABC";
        $scope.$on('clicked:one', function(scope, data) {
            console.log('Dispatched message from rootScope: ' + data);
        });
    })
    .controller('twoController', function($scope) {
        $scope.click = function() {
            $scope.$emit('clicked:two', 'Hello there!');
        }
    })
    .directive('myAwesomeDirectiveHere', function() {
        return {
            restrict: 'C',
            template: '<div class="hello"><h1>Hello there module!</h1></div>'
        };
    })
