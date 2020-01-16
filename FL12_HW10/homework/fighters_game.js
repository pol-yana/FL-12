/* Your code goes here */
function Fighter(obj) {
  this.name = obj.name;
  this.damage = obj.damage;
  this.hp = obj.hp;
  this.strength = obj.strength;
  this.agility = obj.agility;
  this.win=0;
  this.loss=0;

  this.getName = function() {
    return "Name : " + this.name;
  };

  this.getDamage = function() {
    return "Damage: " + this.damage;
  };

  this.getStrength = function() {
    return "Strength: " + this.strength;
  };

  this.getAgility = function() {
    return "Agility: " + this.agility;
  };

  this.getHealth = function() {
    return "Health: " + this.hp;
  };

  this.logCombatHistory = function() {
    return "Name:" + this.name + ", Wins:" + this.win + ", Losses:" + this.loss;
  };

  this.health = function(n) {
    this.hp + n <= 100 ? (this.hp = this.hp + n) : (this.hp = 100);
  };

  this.dealDamage = function(n) {
    this.hp - n > 0 ? (this.hp = this.hp - n) : (this.hp = 0);
  };

  this.addWin = function() {
    this.win++;
  };

  this.addLoss = function() {
    this.loss++;
  };
}
