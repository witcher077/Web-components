
$(document).ready(function(){
    
    //DOM selections
    const headerEle = $(".header");
    const sectionNav = $(".section-nav");
    const heroBg = $(".hero-bg");

    //Events
    $(window).scroll(function(){
        checkScroll();
    })

    function checkScroll(){
        let headerHeight = headerEle.outerHeight();
        let heroBgHeight = heroBg.outerHeight();
        
        let scrollPosition = $(window).scrollTop();
        if(scrollPosition >= heroBgHeight){
            sectionNav.addClass('fixed-section-nav')
            sectionNav.css("top", headerHeight);
        }
        else{
            sectionNav.removeClass('fixed-section-nav')
            sectionNav.css("top", "")
        }
    }
})

