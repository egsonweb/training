(function (factory) {
    factory(jQuery);
})(function ($) {
    $.fn.slider = function (opts) {
        var defaults = {
            dots: false,
            auto: false,
            milli: 600
        };

        var options = $.extend(defaults, opts);

        return this.each(function () {
            var $slider = $(this);
            var $sliderInner = $slider.find('.slider-inner');
            var $sliderItems = $sliderInner.find('.slider-item');

            var currentSlide = 0;
            var numberOfSlides = $sliderItems.length;
            var itemWidth = $sliderInner.find('.slider-item').first().width();
            var innerWidth = itemWidth * numberOfSlides;

            var $prev = $('<a />').attr({
                href: '#prev'
            }).text('Previous').addClass('slider-prev');
            var $next = $('<a />').attr({
                href: '#next'
            }).text('Next').addClass('slider-next');
            $slider.append($prev).append($next);

            if (options.dots) {
                var $dots = $('<ol class="slider-dots" />');
                for (var i = 0; i < numberOfSlides; i++) {
                    var $dotItem = $('<li />').attr('data-number', i);
                    $dotItem.on('click', function () {
                        var $item = $(this);
                        var itemNumber = $item.data('number');
                        $sliderInner.css({
                            marginLeft: -itemNumber * itemWidth + 'px'
                        })
                    });
                    $dots.append($dotItem);
                }

                $slider.prepend($dots);
            }


            $sliderInner.width(innerWidth);
            $sliderItems.each(function (index, slide) {
                var $slide = $(slide);
                $slide.width(itemWidth);
            });

            $prev.on('click', function (e) {
                e.preventDefault();
                currentSlide -= 1;
                if (currentSlide < 0) {
                    currentSlide = numberOfSlides - 1;
                }
                $sliderInner.css({
                    marginLeft: -currentSlide * itemWidth + 'px'
                })
            });

            $next.on('click', function (e) {
                e.preventDefault();
                currentSlide += 1;
                if (currentSlide > numberOfSlides - 1) {
                    currentSlide = currentSlide % numberOfSlides;
                }
                $sliderInner.css({
                    marginLeft: -currentSlide * itemWidth + 'px'
                })
            });

            // if (options.auto) {
            //     var interval;
            //     interval = setInterval(function () {
            //         $next.trigger('click');
            //     }, options.milli);
            //
            //     $slider.on('mouseover', function () {
            //         clearInterval(interval);
            //     });
            // }


        });
    };
});