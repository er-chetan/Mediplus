$('.owl-carousel ').owlCarousel({
    loop:true,
    margin:15,
    dots:true,
    nav:true,
    autoplay:true,
    // stagePadding: 50,    
     
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }

})