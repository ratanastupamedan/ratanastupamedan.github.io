$(document).ready(function() {
    $('.loader_bg').fadeToggle();

    $(".burger").click(function() {
        $(".burger__menu").show();
        $(".burger").hide();
        $(".close__menu").show();
    });

    $(".close__menu").click(function() {
        $(".burger__menu").hide();
        $(".close__menu").hide();
        $(".burger").show();
    });

    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });

    $("Home a").click(function() {
        $("html, body").animate({
            scrollTop: $("#Home_content").offset().top
        }, 2000);
    })

    $("Events a").click(function() {
        $("html, body").animate({
            scrollTop: $("#Event_content").offset().top
        }, 2000);
    })

    $("About a").click(function() {
        $("html, body").animate({
            scrollTop: $("#About_content").offset().top
        }, 2000);
    })

    $("Artikel a").click(function() {
        $("html, body").animate({
            scrollTop: $("#Artikel_content").offset().top
        }, 2000);
    })

    $("Contact a").click(function() {
        $("html, body").animate({
            scrollTop: $("#Contact_content").offset().top
        }, 2000);
    })

    $("Home_mobile a").click(function() {
        $("html, body").animate({
            scrollTop: $("#Home_content").offset().top
        }, 2000);
    })

    $("Events_mobile a").click(function() {
        $("html, body").animate({
            scrollTop: $("#Event_content").offset().top
        }, 2000);
    })

    $("About_mobile a").click(function() {
        $("html, body").animate({
            scrollTop: $("#About_content").offset().top
        }, 2000);
    })

    $("Artikel_mobile a").click(function() {
        $("html, body").animate({
            scrollTop: $("#Artikel_content").offset().top
        }, 2000);
    })

    $("Contact_mobile a").click(function() {
        $("html, body").animate({
            scrollTop: $("#Contact_content").offset().top
        }, 2000);
    })

    $("#Lower_Home").click(function() {
        $("html, body").animate({
            scrollTop: $("#Home_content").offset().top
        }, 2000);
    })

    $("#Lower_Events").click(function() {
        $("html, body").animate({
            scrollTop: $("#Event_content").offset().top
        }, 2000);
    })

    $("#Lower_About").click(function() {
        $("html, body").animate({
            scrollTop: $("#About_content").offset().top
        }, 2000);
    })

    $("#Lower_Artikel").click(function() {
        $("html, body").animate({
            scrollTop: $("#Artikel_content").offset().top
        }, 2000);
    })

    $("#Lower_Contact").click(function() {
        $("html, body").animate({
            scrollTop: $("#Contact_content").offset().top
        }, 2000);
    })
});