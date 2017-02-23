(function (factory) {
    factory(jQuery);
})(function ($) {
    $.fn.slider = function (opts) {
        var defaults = {
            dots: false
        };

        var options = $.extend({}, defaults, opts);

        return this.each(function () {
            var $slider = $(this);
            var $sliderInner = $slider.find('.slider-inner');
            var $sliderItems = $sliderInner.find('.slider-item');
            var $sliderControl = $slider.find('.slider-control');
            var $sliderDots = $slider.find('.slider-dots');
            var $sliderIndicator = $sliderDots.find('li');

            var currentSlide = 0;
            var numberOfSlides = $sliderItems.length;
            var itemWidth = $sliderInner.find('.slider-item').first().outerWidth();
            var innerWidth = itemWidth * numberOfSlides;

            $sliderInner.css({
                width: innerWidth,
                overflow: 'hidden'
            });
            $sliderItems.each(function (index, slide) {
                var $slide = $(slide);
                $slide.outerWidth(itemWidth);
            });

            // OPTIMIZED WAY:
            // Single Event handler for both
            // prev and next buttons
            $sliderControl.on('click', function(e) {
                // Prevent the default event
                e.preventDefault();

                // Cache the control button (Prev or Next)
                var $control = $(this);

                // Grab the direction data from the button
                // to figure out if prev or next was clicked
                var dir = $control.data('slide');

                // Store the value of current slide
                var pos = currentSlide;

                // Decide whether to add/subtract one to current
                // based on the direction of the button clicked
                pos += (~~(dir === 'next') || -1);

                // Normalize the current slide value
                currentSlide = (pos < 1) ? numberOfSlides - 1 : pos%numberOfSlides;

                // Move the slide
                move(currentSlide);
            });


            // Check for dots key on options
            // and then hide/bind events.
            if (options.dots) {
                // Add active to the first dot
                $sliderIndicator.eq(0).addClass('active');

                // Move to slide when clicked
                $sliderIndicator.on('click', function() {
                    var $dot = $(this);

                    // Get the slide index from data attribute
                    // of the slide dot indicator
                    // Set the current slide to the slide index
                    currentSlide = $dot.data('slide-to');

                    // Add necessary classes to show active dot
                    $sliderIndicator.removeClass('active');
                    $dot.addClass('active');

                    // Move to the current slide
                    move(currentSlide);
                });
            } else {
                // $sliderDots.css({
                //     display: 'none'
                // });

                // A much more advanced way of doing
                // since we don't want to keep things
                // in the DOM which aren't being used
                $sliderDots.remove();
            }


            /**
             * Function to move the slide
             * @param slideIndex
             */
            function move(slideIndex) {
                $sliderInner.css({
                    marginLeft: -slideIndex * itemWidth + 'px'
                });
            }
        });
    };
});