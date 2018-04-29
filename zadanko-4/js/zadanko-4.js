'use strict';
$(function(){
    $('.first').click(function() {
        $('p').hide(3000).show(3000)
    });
    
    $('.drugi').click(function() {
        $('h1').fadeIn(3000).fadeOut(3000)
                 });
    $('.trzeci').click(function() {
        $('h2').slideUp(3000).slideDown(3000)
    });
    
    animateDiv();
    
    function animateDiv(){
    
    $('div')
        .animate({ width: '200px', height: '200px'}, 2000)
        .animate({ width: '100px', height: '100px'}, 2000, animateDiv)
    }
});



