document.addEventListener("DOMContentLoaded", function () {
    // Enable nested dropdown on click for mobile
    const dropdownItems = document.querySelectorAll('.dropdown-submenu > a');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            const isVisible = submenu.classList.contains('show');
            document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
            if (!isVisible) {
                submenu.classList.add('show');
            }
        });
    });
});

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

// Nav-Bar Dropdown
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown, .dropdown-submenu');
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (e) {
            e.stopPropagation();
            const submenu = this.querySelector('.dropdown-menu');
            if (submenu) {
                submenu.classList.toggle('show');
            }
        });
    });
});