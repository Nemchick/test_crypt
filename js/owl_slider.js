$(document).ready(function () {
    var carousel = $(".slider");

    carousel.owlCarousel({
      loop: true,
      responsive: {
        0: {
          items: 7.8,
        },
        480: {
          items: 7.8,
        },
        768: {
          items: 11.4,
        },
        1400: {
          items: 19,
        },
      },
      margin: 10, // отступ между слайдами
    });

    $(".navigation_button.prev").click(function () {
      carousel.trigger("prev.owl.carousel");
    });

    $(".navigation_button.next").click(function () {
      carousel.trigger("next.owl.carousel");
    });
  });