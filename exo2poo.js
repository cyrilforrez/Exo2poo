function Personnage(nom, attack, defense, sante) {
    this.nom = nom;
    this.attack = attack;
    this.defense = defense;
    this.sante = sante;
    this.combattre = function(cible) {
        cible.sante = cible.sante - this.attack;
        if (cible.sante < 50) {
            alert(this.nom + " " + "attaque" + " " + "et infligé" + " " + this.attack + " " + "points de degats à" + " " + cible.nom);
            alert("il reste" + " " + cible.sante + " " + "de vie" + " " + "à" + " " + cible.nom);
        }
        if (cible.sante == 0) {
            alert(cible.nom + " " + "est mort");
        }
    };
    this.heal = function() {
        if (this.mana >= 10) {
            this.mana -= 10
            this.sante += 10
            alert(this.nom + " " + "lance un sort de soin et se soigne de" + " " + this.mana + " " + "points de vie");
            alert(this.nom + " " + "à" + " " + this.sante + " " + "points de vie");
        }
    };
}



var Warrior1 = new Personnage("martin", 20, 10, 30);
var Warrior2 = new Personnage("Dupont", 10, 5, 30);
var Wizzard = new Personnage("Magnus", 30, 10, 40);
Wizzard.mana = 20;


Warrior1.combattre(Wizzard);
Warrior2.combattre(Wizzard);
Wizzard.heal();
Wizzard.combattre(Warrior1);