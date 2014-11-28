$(document).ready(function() {
  var $heroes = $('#heroes');

  $heroes.sortable({
    placeholder: "ui-state-placeholder",
    revert: false
  });
  
  $("*").disableSelection();

  var initHeroes = function () {
    $.getJSON('/data/heroes.json', function (data) {
      createThumbnails(data);
    });
  };

  var createThumbnails = function (data) {
    for (var i = 0; i < 115; i++) {
      var $listItem;

      if (i < data.heroes.length) {
        var hero = data.heroes[i],
          name = hero.name,
          localizedName = hero.localized_name,
          id = hero.id,
          $span = $('<span />').text(localizedName),
          bgPadding = 5,
          spriteWidth = 81,
          spriteHeight = 104,
          imagePerRow = 12,
          leftPos = -(((id % imagePerRow) - 1) * spriteWidth) - bgPadding,
          topPos = -(Math.floor(id / imagePerRow) * spriteHeight) - bgPadding,
          bgPosition = leftPos + 'px ' + topPos + 'px';

        console.log(id % 12);

        $listItem = $('<li style="background-position: ' + bgPosition + ';" />').attr('data-hero-id', id).attr('data-hero-name', name);
        $span.appendTo($listItem);
      } else {
        $listItem = $('<li style="background-image: none;" />');
      }

      $listItem.appendTo($heroes);
    }
  };

  initHeroes();

  
});