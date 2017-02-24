(function(factory) {
    factory(jQuery)
})(function($) {
    var Dropdown = (function () {
        function _Dropdown(el, opts) {
            this.el = el;
            this.opts = opts;

            this.$selected = this.el.find('.dropdown-text');
            this.init();
        }

        return _Dropdown;
    })();

    Dropdown.prototype.init = function() {
      this.bindEvents();
    };

    Dropdown.prototype.bindEvents = function() {
        var self = this;

        $(document).on('click', function(e) {
            if (!$(e.target).is('dropdown')) {
                self.el.removeClass('active');
            }
        });

        this.el.on('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            var $dropdown = $(this);
            $dropdown.toggleClass('active');
        });

        this.el.on('click', '.dropdown-item', function(e) {
            e.preventDefault();
            var $item = $(this);
            self.$selected.text($item.text());
        });
    }


    $.fn.dropdown = function(opts) {
        return this.each(function(idx, el) {
           var $el = $(el);
           return new Dropdown($el, opts);
        });
        console.log('asdasd');
    }
});