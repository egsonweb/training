$(document).ready(function() {
    var root = 'http://localhost:3000';

    var source = $('#users-template').html();
    var templateFn = Handlebars.compile(source);
    var $users = $('#users');

    $.ajax({
        url: root + '/users',
        method: 'GET'
    }).then(function(data) {
        var markup = templateFn(data)
        $users.html(markup);
    });
})