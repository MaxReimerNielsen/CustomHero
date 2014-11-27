$(document).ready(function() {
  var $heroes = $('#heroes');

  $heroes.sortable({
    placeholder: "ui-state-placeholder",
    revert: false
  });
  
  $("*").disableSelection();

  var initHeroes = function () {
    var heroes = [
      "abaddon",
      "alchemist",
      "ancient apparition",
      "anti-mage",
      "axe",
      "bane",
      "batrider",
      "beastmaster",
      "bloodseeker",
      "bounty hunter",
      "brewmaster",
      "bristleback",
      "broodmother",
      "centaur warrunner",
      "chaos knight",
      "chen",
      "clinkz",
      "clockwerk",
      "crystal maiden",
      "dark seer",
      "dazzle",
      "death prophet",
      "disruptor",
      "doom",
      "dragon knight"
    ];

    for (var i = 0; i < 120; i++) {
      var $listItem;

      if (i < heroes.length) {
        $listItem = $('<li style="background-image: url(http://dota2layout.com/images/heroes/npc_dota_hero_' + heroes[i] + '.png);" />');
      } else {
        $listItem = $('<li />');
      }

      $listItem.appendTo($heroes);
    }

    _.each(heroes, function (name) {
      
    });
  };

  initHeroes();

  
});