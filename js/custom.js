$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    $('.dropdown-trigger').dropdown();
    $('.modal').modal();
    $('.collapsible').collapsible({accordion: false});
    $('.datepicker').datepicker({
        format: 'dd mmm',
        defaultDate: new Date(),
        setDefaultDate: true
    });
    $('.sidenav').sidenav();
    $('.timepicker').timepicker();

    $('.with-gap[checked]').parent().parent().addClass('active');
    $(document).on('click', '.address-block', function(e) {
        const $el = $(this);
        $el.addClass("active").siblings().removeClass('active');
    });

    setTimeout(function () {
        let viewheight = $(window).height();
        let viewwidth = $(window).width();
        let viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
    }, 300);
});