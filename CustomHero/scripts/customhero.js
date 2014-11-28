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
          localizedName = hero.localized_name;

        $listItem = $('<li style="background-image: url(/images/' + name + '.png);" />').attr('data-hero-id', hero.id);
        $span = $('<span />').text(localizedName);
        $span.appendTo($listItem);
      } else {
        $listItem = $('<li />');
      }

      $listItem.appendTo($heroes);
    }
  };

  initHeroes();

  
});