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
    let probability = 100 - (fighter.getStrength() + fighter.getAgility());
    let rand = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0) + 1));
    if (probability > rand) {
      fighter.hp = fighter.hp - this.getDamage();
      console.log(
        this.getName() +
          " makes " +
          this.getDamage() +
          " to " +
          fighter.getName()
      );
    } else {
      console.log(this.getName() + " attack missed");
    }
  };

  this.logCombatHistory = function() {
    console.log(
      "Name: " + this.getName() + ", Wins:" + this.win + ", Losses:" + this.loss
    );
  };

  this.heal = function(n) {
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

function battle(fighter1, fighter2) {
  if (fighter1.getHealth() === 0) {
    console.log(fighter1.getName() + " is dead and can`t fight");
  } else if (fighter2.getHealth() === 0) {
    console.log(fighter1.getName() + " is dead and can`t fight");
  } else {
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
      fighter1.attack(fighter2);
      if (fighter2.getHealth > 0) {
        fighter2.attack(fighter1);
      }
    }

    if (fighter1.getHealth() === 0) {
      fighter1.addLoss();
      fighter2.addWin();
      console.log(fighter2.getName() + " has won!");
    } else {
      fighter1.addWin();
      fighter2.addLoss();
      console.log(fighter1.getName() + " has won!");
    }
  }
}
