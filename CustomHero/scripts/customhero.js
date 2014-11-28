$(document).ready(function() {
  var heroes,
    $heroes = $('#heroes');

  $heroes.sortable({
    placeholder: "ui-state-placeholder",
    revert: false
  });
  
  $("*").disableSelection();

  var initHeroes = function () {
    $.getJSON('/data/heroes.json', function (data) {
      heroes = data.heroes;

      createThumbnails(sortHeroes());
    });
  };

  var sortHeroes = function(sortBy) {
    sortBy = sortBy || "name";

    heroes = _.sortBy(heroes, function (hero) {
      return hero[sortBy];
    });
  };

  var createThumbnails = function () {
    for (var i = 0; i < 115; i++) {
      var $listItem;

      if (i < heroes.length) {
        var hero = heroes[i],
          name = hero.name,
          localizedName = hero.localized_name,
          id = hero.id,
          spriteWidth = 71,
          spriteHeight = 94,
          imagePerRow = 12,
          row = Math.floor((id - 1) / imagePerRow),
          column = (id - 1) % imagePerRow,
          leftPos = -(column * spriteWidth),
          topPos = -(row * spriteHeight),
          bgPosition = leftPos + 'px ' + topPos + 'px';

        $listItem = $('<li style="background-position: ' + bgPosition + ';" />').attr('data-hero-id', id).attr('data-hero-name', name);
        var $span = $('<span />').html(localizedName);
        $span.appendTo($listItem);
      } else {
        $listItem = $('<li style="background-image: none;" />');
      }

      $listItem.appendTo($heroes);
    }
  };

  initHeroes();

  
});