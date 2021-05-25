$(function() {
    'use strict';
    $(window).on("scroll", function() {

        if ($(document).scrollTop() > 0) {
            $(".custom-nav").addClass("scroll");
            $(".custom-nav").addClass("fixed-top");
        } else {
            $(".custom-nav").removeClass("scroll");
            $(".custom-nav").removeClass("fixed-top");
    
        }
    });
    // active nav
    $('.navbar-nav .nav-item').on('click', function() {
        $('.navbar-nav .nav-item.active').removeClass('active');
        $(this).addClass('active');
    });
      // Mean Menu
      jQuery('.mean-wrapper').meanmenu({
        meanScreenWidth: "991"
    });
    $(".close-btn").on("click", function () {
        $(".search-overlay").fadeOut();
        $(".search-btn").show();
        $(".close-btn").removeClass("active");
    });
    $(".search-btn").on("click", function () {
        $(this).hide();
        $(".search-overlay").fadeIn();
        $(".close-btn").addClass("active");
    });
        
    ///////////////////////////////////////////// 
    //! CLIENT*
    $('.header-slider').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        animateIn: 'fadeIn',
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        margin:1000,
        responsive: {
            0: {
                items: 1
            }
        }
    })

    $('.categories-slider').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        stagePadding: 80,
        loop: true,
        margin: 20,
        dots: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },

            1000: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    })
    // back to top
    $(".back2").click(function() {
        $('html, body').animate({
        scrollTop: 0,
        }, 1000);
    });
    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 500){
          $('.back2').addClass('aaa');
          $('.aaa').fadeIn(500);
        }
        else if(scrolling > 200){
          $('.aaa').fadeOut(500);
        }
    });
    var icon = $('.search-icon');
    var form = $('form.search');

    icon.click(function() {
    form.toggleClass('open');
    if (form.hasClass('open')) {
        form.children('input.search').focus();
    }
    });
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    })
    $(".input-counter").each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find(".plus-btn"),
            btnDown = spinner.find(".minus-btn"),
            min = input.attr("min"),
            max = input.attr("max");
        btnUp.on("click", function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on("click", function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
});
//save-image
setUpDownloadPageAsImage();

function setUpDownloadPageAsImage() {
  document.getElementById("download-page-as-image").addEventListener("click", function() {
    html2canvas(document.body).then(function(canvas) {
      console.log(canvas);
      simulateDownloadImageClick(canvas.toDataURL(), 'file-name.png');
    });
  });
}

function simulateDownloadImageClick(uri, filename) {
  var link = document.createElement('a');
  if (typeof link.download !== 'string') {
    window.open(uri);
  } else {
    link.href = uri;
    link.download = filename;
    accountForFirefox(clickLink, link);
  }
}

function clickLink(link) {
  link.click();
}

function accountForFirefox(click) { // wrapper function
  let link = arguments[1];
  document.body.appendChild(link);
  click(link);
  document.body.removeChild(link);
}
//print
function myFunction() {
    window.print();
}



