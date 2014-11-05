(function() {

  $('ol').wrap('<div id="wrapper"></div>');

  $('li').each(function() {
    $(this).prop('contenteditable', true);
  });

  var $addColumn = $('<button class="action">Add column</button>').on('click', function() {
    $('ol').append('<li contenteditable>Column</li>');
  });

  $('#container').append($addColumn);

}());
