'use strict';

$(function () {

    
                $('p').eq(1).css({
                    'background-color': 'green'
                });


            });
    
   $( 'p' ).each(function(index) {
                 $(this).addClass("paragraf-" + index);
                 })
