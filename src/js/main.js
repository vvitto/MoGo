$(document).ready(function(){
    $(".tab-list__title").on('click', function(){
        if(!$(this).parent().hasClass("active")){
            $(".tab-list__item.active").removeClass('active');
            $(this).parent().addClass("active");
        }
    });
    var scrollHeightPers;
    setTimeout(function(){
        scrollHeightPers = 160 / $(".tab-list__descr p").height();
        console.log(scrollHeightPers);
        $(".tab-list__scroll-inner").css("height", scrollHeightPers*100 + "%");
    }, 1000);
    
    
});