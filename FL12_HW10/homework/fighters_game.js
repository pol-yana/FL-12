/* Your code goes here */
function Fighter(obj) {
  this.name = obj.name;
  this.damage = obj.damage;
  this.hp = obj.hp;
  this.strength = obj.strength;
  this.agility = obj.agility;
  this.win = 0;
  this.loss = 0;

  this.getName = function() {
    return this.name;
  };

  this.getDamage = function() {
    return this.damage;
  };

  this.getStrength = function() {
    return this.strength;
  };

  this.getAgility = function() {
    return this.agility;
  };

  this.getHealth = function() {
    return this.hp;
  };

  this.attack = function(fighter) {
    let probability = 1 / (fighter.getStrength() + fighter.agility());
    let rand = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0) + 1));
    if (probability > rand) {
      fighter.hp = fighter.hp - this.damage;
      return this.name() + "makes" + this.damage() + "to" + fighter.name();
    } else {
      return this.name() + "attack missed";
    }
  };

  this.logCombatHistory = function() {
    return (
      "Name:" +
      this.getName(name) +
      ", Wins:" +
      this.win +
      ", Losses:" +
      this.loss
    );
  };

  this.heal= function(n) {
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