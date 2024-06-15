
$(document).ready(function(){
    
    //DOM selections
    const headerEle = $(".header");
    const sectionNav = $(".section-nav");
    const heroBg = $(".hero-bg");
    const sectionNavItems = $(".section-nav .section-nav-item");
    const sectionsGroup = $(".group-section .section");

    //Events
    $(window).scroll(function(){
        checkScroll();
    })

    function checkScroll(){
        let headerHeight = headerEle.outerHeight();
        let heroBgHeight = heroBg.outerHeight();
        let sectionNavOffset = sectionNav.offset().top;
        let sectionNavHeight = sectionNav.outerHeight();
        let triggerPoint = sectionNavOffset + sectionNavHeight;

        //section navbar sticky code
        let scrollPosition = $(window).scrollTop();
        if(scrollPosition >= heroBgHeight){
            sectionNav.addClass('fixed-section-nav')
            sectionNav.css("top", headerHeight);
        }
        else{
            sectionNav.removeClass('fixed-section-nav')
            sectionNav.css("top", "")
        }

        //section nav items activation code on scroll
        
    }
})

