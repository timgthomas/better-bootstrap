(function() {

  $('ol').wrap('<div id="wrapper"></div>');

  $('li').each(function() {
    $(this).prop('contenteditable', true);
  });

  var $addColumn = $('<button class="action">Add column</button>').on('click', function() {
    $('ol').append('<li contenteditable>Column</li>');
  });

  var $toggle = $('<button class="action">Change layout mode</button>').on('click', function() {
    $('ol').toggleClass('fixed');
  });

  $('#container').append($addColumn, $toggle);

}());
