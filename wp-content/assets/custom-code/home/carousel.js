function initPartnersCarousel() {
  $(".partners-carousel").owlCarousel({
    center: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        loop: true,
      },
      600: {
        items: 3,
        nav: true,
        dots: false,
        loop: true,
      },
      1000: {
        items: 5,
        nav: false,
        dots: true,
        loop: true,
      },
      1400: {
        items: 5,
        nav: false,
        dots: true,
        loop: true,
      },
      1600: {
        items: 5,
        nav: false,
        dots: true,
        loop: true,
      },
    },
  });
}

function includeHTML() {
  $(".partners-carousel").waitForImages(function () {
    console.log("All images are loaded.");
    initPartnersCarousel();
  });
}