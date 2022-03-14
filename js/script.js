/* Preloader */
$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut();
});

// for active link css
$(function () {
  $(".nav-links > li > a").each(function () {
    var url = window.location.href;
    var href = $(this).prop("href");
    if (url == href) {
      $(this).css({ color: "#319647", "font-weight": "bold" });
    }
  });
});

// for menu links
$(".nav-btn").on("click", function () {
  $(".sidebar").addClass("show-links");
  $('.nav-logo').css("z-index","-1")
});
$(".close-btn").on("click", function () {
  $(".sidebar").removeClass("show-links");
});

$(function () {
  $("#testimonials").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      "<img src='../Images/arrow-1.png'>",
      "<img src='../Images/arrow-2.png'>",
    ],
    
  });
});
 