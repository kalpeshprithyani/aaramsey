$(document).ready(function(){
    $('#testimonial-carousel').carousel({
        fullWidth: true
    });

    $('#discount-banner-carousel').carousel({
        fullWidth: true,
        indicators: true,
        duration:150
    });

    setInterval(()=>{
        $('#discount-banner-carousel').carousel('next')
    },4000);

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

    $('.with-gap[checked]').parent().parent().parent().addClass('active');
    $(document).on('click', '.address-block', function(e) {
        const $el = $(this);
        $el.addClass("active").siblings().removeClass('active');
    });

    $('.tabs').tabs();


    $('select').formSelect({
        classes:'padding-select'
    });
    
    $(".truncate-dot").dotdotdot({
        height: 50,
        fallbackToLetter: true,
        watch: true,
    });

    $('.timepicker').timepicker({
        interval: 15
    });
});