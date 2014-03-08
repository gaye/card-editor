var Card = require('./lib/model/card'),
    ko = require('knockout'),
    template = require('./lib/template');


(function main() {
  var container = document.getElementsByClassName('ui-container')[0];
  container.innerHTML = template.ui.render();

  var cardPreview = document.getElementsByClassName('card-preview')[0];
  cardPreview.innerHTML = template.card.render();

  var cardEditor = document.getElementsByClassName('card-editor')[0];
  cardEditor.innerHTML = template.cardEditor.render();

  var card = new Card();
  ko.applyBindings(card);
})();
