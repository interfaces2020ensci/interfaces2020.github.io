
// templating
var contentType = [ 'graphism', 'object', 'photography', 'bicycle' ];
var imageType = [ 'wip', 'fWork', 'models', 'renderings', 'pictures', 'drawings' ];

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.projet'
  layoutMode: 'fitRows'
});

var $output = $('#output');

// filter with selects and checkboxes
var $checkboxes = $('#tag input');

$checkboxes.change( function() {
  // map input values to an array
  var inclusives = [];
  // inclusive filters from checkboxes
  $checkboxes.each( function( i, elem ) {
    // if checkbox, use value if checked
    if ( elem.checked ) {
      inclusives.push( elem.value );
    }
  });

  // combine inclusive filters
  var filterValue = inclusives.length ? inclusives.join(', ') : '*';

  $output.text( filterValue );
  $grid.isotope({ filter: filterValue })
});
