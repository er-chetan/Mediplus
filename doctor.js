$('.slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    dots:false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.client').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay:true,
    dots:false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.owl-rule').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay:false,
    dots:false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


