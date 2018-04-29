'use strict';
$(function() {
  
  console.log($('p').text('Paragraf :)').text());
  $('#par2').html('Hello<b>world</b>!');
  $( '#par2' ).append( "Hahahah" );
  $( '#par2' ).prepend( "Hihihih" );
  $( '#par2' ).after('<p>Dodatkowy paragraf</p>');
  $( 'h1' ).find ( 'strong' ).remove();
  $( 'p' ).css(
  {
      'font-size': '30px',
      color: 'red'
  });  
  $( '.blue' ).css( { color: 'blue' });
  
  
  });




