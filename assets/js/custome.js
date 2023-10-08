if ($(window).width() > 319) {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });
  }
  
  $("button.close-btn").click(function () {
    $(".navbar-collapse").removeClass("collapsing show");
  });
  

  $(document).ready(function () {
    ("use strict");
      var swiper = new Swiper('.abinspo-swiper', {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 40,
        autoplay: {
            delay: 6000,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 2.6,
            spaceBetween: 40,
          },
          1199: {
            slidesPerView: 3.2,
            spaceBetween: 50,
          },
          1399: {
            slidesPerView: 2.5,
            spaceBetween: 70,
          },
        },
      });
    });

// Home Experties tabing js
$(document).ready(function(){
  // Hide all tab content elements except the first ones
  $(".hexpert-desc").not(":first").hide();
  $(".hexpert-box").not(":first").hide();

  // Handle tab clicks
  $(".hexpert-tabbing ul li a").click(function(){
      // Get the data-rel and data-rel-show attribute values
      var tabId = $(this).attr("data-rel");
      var tabIdShow = $(this).attr("data-rel-show");

      // Hide all tab content elements
      $(".hexpert-desc").hide();
      $(".hexpert-box").hide();

      // Show the corresponding tab content
      $("#" + tabId).show();
      $("#" + tabIdShow).show();

      // Remove 'active' class from all tabs
      $(".hexpert-tabbing ul li a").removeClass("active");

      // Add 'active' class to the clicked tab
      $(this).addClass("active");

      return false; // Prevent default anchor behavior
  });
});


// training listing tabing js
$('.projectlis-filter li a').on('click', function(){
  var target = $(this).attr('data-rel');
$('.projectlis-filter li a').removeClass('active');
  $(this).addClass('active');
  $("#"+target).fadeIn('slow').siblings(".projectlis-box").hide();
  return false;
});