
$(document).ready(function() {
  let owl= $(".owl-carousel"),
      url = null,
      prev = $(".arrowleft"),
      next = $(".arrowright");

  owl.owlCarousel({
      loop: true,
      items: 3,
      center: true,
      touchDrag: true,

      responsive:{
        0:{
          items: 1,
          // stagePadding: 20,
          margin: 0
        },
        640:{
          items: 1,
          margin: 7
        },
        1024:{
          items: 1,
          margin: 7
        }
      }
  });


AOS.init();
});
