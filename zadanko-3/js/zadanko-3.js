'use strict';

$(function() {
    
  
  $('p').click(function(){
        $(this).css( 'color', 'orange')
               });
    
  $('.guzik').on({
      'mouseenter': function(){
          $(this).css( 'color', 'green')
      },
      'mouseleave': function(){
          $(this).css( 'color', 'blue')
                              }
  });
  
  });