// import $ from 'jquery';
// import whatInput from 'what-input';
//
// window.$ = $;
//
// import Foundation from 'foundation-sites';
// // If you want to pick and choose which modules to include, comment out the above and uncomment
// // the line below
// //import './lib/foundation-explicit-pieces';
//
//
// $(document).foundation();

if (particlesJS && document.getElementById('particles-js')) {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 55,
        "density": {
          "enable": true,
          "value_area": 530
        }
      },
      "color": {
        "value": ["#00c3ff", "#00c3ff"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000"
        },
      },
      "opacity": {
        "value": 0.6,
      },
      "size": {
        "value": 1.5,
      },
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color" : "#252525",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "top",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "bounce": true,
        "attract": {
          "enable": false,
          "rotateX": 2000,
          "rotateY": 2000
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 1000,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 10,
          "duration": 0.2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}

(function(){

    jQuery(function(){
        jQuery("#bgndVideo").YTPlayer();
    });

    $('#getting-started').countdown('2018/04/07', function(event) {
        $(this).html(event.strftime('%w weeks : %d days : %H hours : %M min : %S'));
    });

    $('[data-scroll]').click(function (e){
      e.preventDefault();
        var el = '[data-scroll-to="' + this.getAttribute('data-scroll') + '"]';
        $('html, body').animate({
            scrollTop: $(el).offset().top
        }, 600);
    });

    // var controller = new ScrollMagic.Controller();

    // var animationPhotoObj = $('.page__container');

    // var animationHeader = new TimelineMax();
    // animationHeader.from('.animateUp', 0.5, {y: 100, opacity: 0})
    //                .to('.animateUp', 0.5, {y: 0, opacity: 1});

    // Array.prototype.forEach.call(animationPhotoObj, function (item, index) {
    //
    //     var newAnimationPhotoScene = new ScrollMagic.Scene({
    //         triggerElement: '.page__container',
    //         triggerHook: 0,
    //         offset: 0,
    //         duration: "100%"
    //     }).setTween(animationHeader).addTo(controller);
    //     newAnimationPhotoScene.addIndicators();
    // });


    new WOW().init();


})();