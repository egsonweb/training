define(['slider'], function(s) {
    var App = {
        initSlider: function() {
            s.start();
        },

        init: function() {
            this.initSlider();
        }
    }

    return App;
})