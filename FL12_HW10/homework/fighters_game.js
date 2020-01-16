/* Your code goes here */
function Fighter(obj) {
    this.name = obj.name;
    this.damage = obj.damage;
    this.hp = obj.hp;
    this.strength = obj.strength;
    this.agility = obj.agility;

    this.getName = function(){
        return 'Name : ' + this.name;
    }

    this.getDamage =function(){
        return 'Damage: ' + this.damage;
    }

    this.getStrength =function(){
        return 'Strength: ' + this.strength;
    }

    this.getAgility =function(){
        return 'Agility: ' + this.agility;
    }

    this.getHealth =function(){
        return 'Health: ' + this.hp;
    }

}