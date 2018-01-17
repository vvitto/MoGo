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
            console.log(1);
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
    
    // $(window).on("scroll", function(e){
    //     console.log($(e.target).scrollTop());
    // });
});