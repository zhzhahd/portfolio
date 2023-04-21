$(document).ready(function(){

  particlesJS("back", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 10,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 1,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
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

  

    //slide 1 text-up
    $('#main-text1').animate({opacity:1},100).css({marginTop:-250}); 
 
    //slide 이동
    var w = window.innerWidth;
    $('#control>button').click(function () {
        var i = $(this).index();
        $('#slide-wrap').animate({ marginLeft: -w * i },800);
    });

    //페이지별 slide 이동
    $('.s1_arrow').click(function(){
      var index = $(this).parents('.slide').index();
      console.log(index);
      var a = window.innerWidth;
      $('#slide-wrap').animate({ marginLeft: -a*(index+1) },800);
    });

    function light(){
      $('#moon').animate({opacity:0.5},1500, function(){
        $('#moon').animate({opacity:1});
      });
    }

    setInterval(light, 1000);


    //slide2 animation text    
    var textWrapper = document.querySelector('.ml9 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
      .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i+1)
      }).add({
        targets: '.ml9',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
    
    
      $("#control button:nth-child(2)").click(function(){
        $('#profile-top').addClass('up');
        $('#profile-bottom').addClass('up2');
      });
      
      $(".s1_arrow").click(function(){
        $('#profile-top').addClass('up');
        $('#profile-bottom').addClass('up2');
      });



  // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml11 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  $('#control button').click(function(){
    $(this).css({"color": "#333", "background": "gold"});
    // $(this).css({background:gold});
  });

  $('#control button:first').click(function(){
    $(this).css({"color": "#333", "background": "gold"});
  });





});