var ko = require('knockout');


function Card() {
}
module.exports = Card;


Card.prototype = {
  /**
   * @type {String}
   */
  name: ko.observable(),

  /**
   * @type {String}
   */
  cardtype: ko.observable(),

  /**
   * @type {String}
   */
  color: ko.observable(),

  /**
   * @type {String}
   */
  image: ko.observable(),

  /**
   * @type {Number}
   */
  colorCost: ko.observable(),

  /**
   * @type {Number}
   */
  colorlessCost: ko.observable(),

  /**
   * @type {String}
   */
  description: ko.observable(),

  /**
   * @type {Number}
   */
  power: ko.observable(),

  /**
   * @type {Number}
   */
  hp: ko.observable(),

  isEnvoy: function() {
    var cardtype = this.cardtype();
    return typeof cardtype === 'string' &&
           cardtype.indexOf('Envoy') !== -1;
  },

  hasColorCost: function() {
    return this.isPositiveNumber(this.colorCost());
  },

  hasColorlessCost: function() {
    return this.isPositiveNumber(this.colorlessCost());
  },

  isPositiveNumber: function(num) {
    return /^\d+$/.test(num) && !/^0*$/.test(num);
  },

  formatCombat: function() {
    var power = this.power(),
        hp = this.hp();
    power = this.isPositiveNumber(power) ? power : '?';
    hp = this.isPositiveNumber(hp) ? hp : '?';
    return power + ' / ' + hp;
  }
};
