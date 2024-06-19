
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


    const sectionGroupNodeList = sectionsGroup.get();
    const sectionNavItemsNodeList = sectionNavItems.get();

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
        sectionGroupNodeList.forEach((item)=>{
            let top =  $(window).scrollTop();
            let offset = item.offset();
            let height = item.offsetHeight();
            let id = item.getAttribute('id');
            if(top>=offset && top < (offset+height)){
                sectionNavItemsNodeList.forEach(navLink=>{
                 navLink.addClass.remove('active-nav');
                 document.querySelector(".section-nav a [href*='+id+']").classList.add("active-nav")
                })
            }
        })
            
    }
})

