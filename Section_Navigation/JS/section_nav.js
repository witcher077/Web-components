
$(document).ready(function(){
    
    //DOM selections
    const headerEle = $(".header");
    const sectionNav = $(".section-nav");
    const heroBg = $(".hero-bg");
    const sectionNavItems = $(".section-nav .section-nav-item");
    const sectionsGroup = $(".group-section .section");

    const sectionGroupNodeList = sectionsGroup.get();

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
        console.log(scrollPosition)
        console.log(triggerPoint)
        if(scrollPosition >= heroBgHeight){
            sectionNav.addClass('fixed-section-nav')
            sectionNav.css("top", headerHeight);
        }
        else{
            sectionNav.removeClass('fixed-section-nav')
            sectionNav.css("top", "")
        }

        //section nav items activation code on scroll
        sectionGroupNodeList.forEach((item, index)=>{
            console.log($(item).offset().top)
            if(($(item).offset().top+$(item).outerHeight()) < (scrollPosition + triggerPoint)){
                $(item).css("color", "red");
            }
        })
            
    }
})

