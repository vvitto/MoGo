$(document).ready(function(){
    $(".tab-list__title").on('click', function(){
        if(!$(this).parent().hasClass("active")){
            $(".tab-list__item.active").removeClass('active');
            $(this).parent().addClass("active");
        }
    });

    var navbar = false;
    $(window).on("scroll", function(){
        if($(window).scrollTop() > 200){

            if(!navbar){
                navbar = true;
                $(".overlayer").addClass("navbar-start");
            }
        }else{
            if(navbar){
                navbar = false;
                $(".overlayer").removeClass("navbar-start");
            }
        }
    });
    
    $('.slider1-wrapper').slick({
        infinite: true,
        appendArrows: $(".slider1__arrow"),
        prevArrow: $(".slider1__arrow-prev"),
        nextArrow: $(".slider1__arrow-next")
    });

    $('.slider2-wrapper').slick({
        infinite: true,
        appendArrows: $(".slider2__arrow"),
        prevArrow: $(".slider2__arrow-prev"),
        nextArrow: $(".slider2__arrow-next")
    });
});