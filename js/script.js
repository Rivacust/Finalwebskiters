$(document).ready(() => {
  $(".slick-second").css({
    maxWidth: "800px",
    margin: "30px auto 0",
  });

  $(".slick-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: ".slick-second",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slick-second").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slick-slider",
    fade: true,
  });

  $(".slick-slider .slick-center").next().addClass("sl-next");
  $(".slick-slider .slick-center").prev().addClass("sl-prev");

  $(".slick-slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".slick-slider").find(".slick-center").next().removeClass("sl-next");
      $(".slick-slider").find(".slick-center").prev().removeClass("sl-prev");
    }
  );

  $(".slick-slider").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".slick-slider").find(".slick-center").next().addClass("sl-next");
      $(".slick-slider").find(".slick-center").prev().addClass("sl-prev");
    }
  );
  $(".prev-arrow").on("click", function () {
    $(".slick-slider").slick("slickPrev");
  });

  $(".next-arrow").on("click", function () {
    $(".slick-slider").slick("slickNext");
  });
});


$(document).ready(function() {
    var $items = $('.slider-item');
    var $textItems = $('.text-item');
    var totalItems = $items.length;
    var currentIndex = 0; 

    // Initialize
    updateSlider(currentIndex);

    $('.next-arrow').click(function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateSlider(currentIndex);
    });

    $('.prev-arrow').click(function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateSlider(currentIndex);
    });

    $('.slider-item').click(function() {
        currentIndex = $(this).data('index');
        updateSlider(currentIndex);
    });

    function updateSlider(index) {
        // 1. Clear all classes
        $items.removeClass('active prev next prev-2 next-2');
        $textItems.removeClass('active');

        // 2. Center Item
        $items.eq(index).addClass('active');

        // 3. Immediate Neighbors (1 step away)
        var prevIndex = (index - 1 + totalItems) % totalItems;
        var nextIndex = (index + 1) % totalItems;
        $items.eq(prevIndex).addClass('prev');
        $items.eq(nextIndex).addClass('next');

        // 4. Outer Neighbors (2 steps away) - NEW logic for 5 items
        var prev2Index = (index - 2 + totalItems) % totalItems;
        var next2Index = (index + 2) % totalItems;
        
        // Prevent overlap if total items are small (e.g. only 3 items)
        if (totalItems > 3) {
            $items.eq(prev2Index).addClass('prev-2');
            $items.eq(next2Index).addClass('next-2');
        }

        // 5. Update Text
        $textItems.eq(index).addClass('active');
    }
});