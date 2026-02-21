if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

$(document).ready(function () {
  $(".scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 50,
      },
      600
    );
    return false;
  });
  
  $(".faq-in").click(function () {
       if ($(this).hasClass("active")) {
          $(".faq-in").removeClass("active");
       } else {
           $(".faq-in").removeClass("active");
          $(this).toggleClass("active");
       }
  });
});