function initAimsCarousel() {
    $(".aims-carousel").owlCarousel({
      center: false,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      margin: 0,
      responsive: {
        0: {
          items: 1,
          dots: true,
          nav: false,
          loop: true,
        },
        600: {
          items: 2,
          dots: true,
          nav: false,
          loop: true,
        },
        1000: {
          items: 3,
          dots: true,
          nav: false,
          loop: true,
        },
        1400: {
          items: 3,
          dots: true,
          nav: false,
          loop: true,
        },
        1600: {
          items: 3,
          dots: true,
          nav: false,
          loop: true,
        },
      },
    });
  }