require.config({
    baseUrl: './scripts',
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        handlebars: '../bower_components/handlebars/handlebars.amd'
    }
})

// Start my app
require(['app'], function(App){
    App.init()
})