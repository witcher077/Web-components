
$(document).ready(function(){
    
    //DOM selections
    const headerEle = $(".header");
    const sectionNav = $(".section-nav");
    const heroBg = $(".hero-bg");
    const sectionNavItems = $(".section-nav .section-nav-item");
    const sectionsGroup = $(".group-section .section");
    const hamburger=$(".ham-Burger");
    const navContainer=$(".nav-container");
    const soc_media=$(".soc-media");

    $(hamburger).on('click',function(e){
        $(this).toggleClass('open');
        $(navContainer).toggleClass('nav-Container-sm');
        $(soc_media).toggleClass('soc-media-sm');
    })


    // Array conversion
    const sectionGroupNodeList = sectionsGroup.get();
    const sectionNavItemsNode = sectionNavItems.toArray();

    // color array
    const colors = ["red", "green", "blue", "violet"];

    //Events
    $(window).scroll(function(){
        checkScroll();
    })

    function checkScroll(){
        let headerHeight = headerEle.outerHeight();
        let heroBgHeight = heroBg.outerHeight();
        let sectionNavOffset = sectionNav.offset().top;
        let sectionNavHeight = sectionNav.outerHeight();
        let triggerPoint = heroBgHeight;

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
        sectionGroupNodeList.forEach((item, index)=>{
            
            if($(item).offset().top < (scrollPosition + triggerPoint)){
                let itemId = $(item).attr('id');
                $(item).css("color", colors[index]);

                sectionNavItemsNode.forEach((link)=>{
                    $(link).removeClass('active-nav');
                    if($(link).attr('href') === `#${itemId}`){
                        $(link).addClass('active-nav');
                    }
                })
            }
            else{
                $(item).css("color", "");
            }
            
        })
            
    }
})

