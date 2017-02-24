$(document).ready(function() {
    $('.image-slider').slider({
        dots: true,
        animation: 'slide'
    });

    $('.dropdown').dropdown();

    // var el = $('.image-slider')
    // var slider = new Slider(el)
    //
    // slider.init();
    //
    // $('.move').on('click', function() {
    //     slider.move(3);
    // })
    //
    // $('#slide').on('keyup', function() {
    //     slider.move($(this).val());
    // });

});