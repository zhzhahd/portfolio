$(document).ready(function(){

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
    
    











});