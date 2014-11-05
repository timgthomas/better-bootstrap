(function() {

  $('.layout').wrap('<div id="wrapper"></div>');

  var $addColumn = $('<button class="action">Simulate Mobile</button>').on('click', function() {
    $('.layout').toggleClass('mobile');
  });

  $('#container').append($addColumn);

}());
