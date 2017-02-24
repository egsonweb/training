(function (name, ctx, factory) {
    ctx[name] = factory(jQuery)
})('Slider', typeof window === 'object' ? window : this, function ($) {
    var Slider = (function () {
        // var animationMap = {
        //     'fade': ['fadeIn', 'fadeOut'],
        //     'slide': ['slideIn', 'slideOut']
        // };

        function _Slider(el, opts) {
            this.el = el;
            this.opts = opts;
            this.currentSlide = 0;

            // this.animation = animationMap[this.opts.animation];

            this.$sliderInner = this.el.find('.slider-inner');
            this.$sliderItem = this.$sliderInner.find('.slider-item');
            this.$sliderControl = this.el.find('.slider-control')

            this.init();
        }

        return _Slider;
    })();

    Slider.prototype.init = function () {
        // Build the slider
        this.build();

        // Bind Events
        this.bindEvents();
    };

    Slider.prototype.build = function () {
        var numSlides = this.$sliderItem.length;
        var itemWidth = this.$sliderItem.outerWidth();

        this.$sliderInner.css({
            width: itemWidth * numSlides,
            overflow: 'hidden'
        });
        this.$sliderItem.each(function (idx, sliderEl) {
            var $this = $(sliderEl);
            $this.css({
                width: itemWidth,
            });
        });
        this.$sliderItem.first().addClass('active');
    };

    Slider.prototype.bindEvents = function () {
        var self = this;
        var numSlides = this.$sliderItem.length;
        this.$sliderControl.on('click', function(e) {
            e.preventDefault();
            var $link = $(this);
            var dir = $link.data('slide');
            var pos = self.currentSlide;
            pos += (~~(dir === 'next') || -1);
            self.currentSlide = (pos < 1) ? numSlides - 1 : pos%numSlides;
            self.move(self.currentSlide)
        });
    };

    Slider.prototype.move = function (slideIndex) {
        // console.log(this.$sliderItem.hasClass('active'));
        this.$sliderItem.removeClass('active').eq(slideIndex).addClass(function() {
            $(this).addClass('active');
        });
    };

    $.fn.slider = function (opts) {
        return this.each(function (index, element) {
            var $el = $(element);
            return new Slider($el, opts);
        })
    }
});