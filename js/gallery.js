$(function(){

  $(window).load(function(){  
    $('.grid').isotope({
      // options
      itemSelector: '.grid-item',
    }); 
  });

  // Isotope Filter Setting
  var grid = $('.grid');
  var m1 = $('#m1');
  var m2 = $('#m2');
  var m3 = $('#m3');
  var m4 = $('#m4');
  

  m1.click(function(e){
    grid.isotope({
      itemSelector: '.grid-item',
      filter : '.grid-item'
    });

    e.preventDefault(); 
  });

  m2.click(function(e){
    grid.isotope({
      itemSelector: '.grid-item',
      filter : '.g1'
    });

    e.preventDefault();
  });

  m3.click(function(e){
    grid.isotope({
      itemSelector: '.grid-item',
      filter : '.g2'
    });

    e.preventDefault();
  });

  m4.click(function(e){
    grid.isotope({
      itemSelector: '.grid-item',
      filter : '.g3'
    });

    e.preventDefault();
  });

});