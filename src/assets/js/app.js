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
        "value": ["#fff", "#fff"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
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
        "color" : "#fff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.05,
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

    $('#getting-started').countdown('2018/08/01', function(event) {
        $(this).html(event.strftime('%d days : %H hours : %M min : %S sec'));
    });
})();