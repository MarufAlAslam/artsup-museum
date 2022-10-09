$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: '<button class="btn prevBtn"><i class="fa fa-caret-left"></i></button>',
    nextArrow: '<button class="btn nextBtn"><i class="fa fa-caret-right"></i></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

$('.slider-sm').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: '<button class="btn prevBtn"><i class="fa fa-caret-left"></i></button>',
    nextArrow: '<button class="btn nextBtn"><i class="fa fa-caret-right"></i></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

$('.slider-2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: '<button class="btn prevBtn"><i class="fa fa-caret-left"></i></button>',
    nextArrow: '<button class="btn nextBtn"><i class="fa fa-caret-right"></i></button>',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

$('.slider-1').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: '<button class="btn prevBtn"><i class="fa fa-caret-left"></i></button>',
    nextArrow: '<button class="btn nextBtn"><i class="fa fa-caret-right"></i></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

$('.slider-img').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: '<button class="btn prevBtn"><i class="fa fa-caret-left"></i></button>',
    nextArrow: '<button class="btn nextBtn"><i class="fa fa-caret-right"></i></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});



$('.mapslider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$('.heroSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="btn prevBtn1"><i class="fa fa-caret-left"></i></button>',
    nextArrow: '<button class="btn nextBtn1"><i class="fa fa-caret-right"></i></button>',
    centerMode: true,
    centerPadding: '20%',
    responsive: [
        {
            breakpoint: 600,
            centerPadding: '0%',
            centerMode: false,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});


$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
});

$('.menutoggler').click(function (e) {
    e.preventDefault()
    $(this).toggleClass('active')
    $('.sideMenu').toggleClass('active')
})

var clk = 1
$('.imgLoader').click(function () {
    if (clk == 5) {
        clk = 0
    }
    clk++
    $('.img1').attr("src", "img/" + clk + "1.jpg")
    $('.img2').attr("src", "img/" + clk + "2.jpg")
    $('.img3').attr("src", "img/" + clk + "3.jpg")
    $('.img4').attr("src", "img/" + clk + "4.jpg")
    $('.img5').attr("src", "img/" + clk + "5.jpg")

    console.log(clk)
})

var c = 0
$('.readMore').click(function () {
    if (c % 2 == 0) {
        $(this).html("Il Castello Sforzesco ha origini nella seconda metà del 1300 quando i Visconti, allora signori di Milano, ne fecero edificare il nucleo originario. <span class='readLess'>[...]</span>")
        c++
    }
    else {
        $(this).html("[...]")
        c++
    }
})


$('.btn-pay').click(function () {
    $('.btn-pay').removeClass('active')
    $(this).addClass('active')
})


$('.center-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
})
$('.single-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});


$('.bb-btn').click(function () {
    $('.bb-btn').removeClass('active')
    $(this).addClass('active')
})

$('.big-map-img').click(function () {
    $('.map-details.ps-5.picasso').addClass('active')
})