$(window).scroll(function() {
    let scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".header").addClass("header-bg");
    } else {
        $(".header").removeClass("header-bg");
    }
});


$( ".btn-menu" ).on( "click", function( event ) {
    $(this).toggleClass('active');
    $('html').toggleClass('overflow-h');
    $('.menu-mobile').toggleClass('menu-mobile--open');
});

// $( "#btn-show-info" ).on( "click", function( event ) {
//     $(this).toggleClass('active');
//     $('.product-info').toggleClass('active');
// });
//
// $( "#btn-show-nomenclature" ).on( "click", function( event ) {
//     $(this).toggleClass('active');
//     $('.product-nomenclature').toggleClass('active');
// });

(function() {
    // page scroll bind
    $(window).on('scroll', onScroll);
    // onScroll();

})();

function onScroll() {
    let wst = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height();

    let scrollPercent = (wst / (dh - wh)) * 100;

    $('.main-unit__bg').each((i, e) => {
        let zoom = $(e).attr('data-zoom');
        let variant = ((+zoom) * scrollPercent / 100);
        // let bgSize = 'auto' + ' ' + (100 + variant) + '%' ;
        let bgSize = 'scale(' + (1 + variant) + ')' ;

        $(e).css('transform', bgSize);
    });
}

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});

AOS.init();