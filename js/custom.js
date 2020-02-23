$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    $('.dropdown-trigger').dropdown({
        coverTrigger: false,
        constrainWidth: false
    });
    $('.modal').modal();
    $('.collapsible').collapsible({accordion: false});
    $('.datepicker').datepicker({
        format: 'dd mmm',
        defaultDate: new Date(),
        setDefaultDate: true
    });
    $('.sidenav').sidenav();
    $('.timepicker').timepicker();

    $('.with-gap[checked]').parent().parent().parent().addClass('active');
    $(document).on('click', '.address-block', function(e) {
        const $el = $(this);
        $el.addClass("active").siblings().removeClass('active');
    });

    $('.tabs').tabs();


    $(".truncate-dot").dotdotdot({
        height: 50,
        fallbackToLetter: true,
        watch: true,
    });

    $('select').formSelect({
        classes:'padding-select'
    });

});