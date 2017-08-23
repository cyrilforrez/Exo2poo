function Personnage(nom, attack, defense, sante) {
	this.nom = nom;
	this.attack = attack;
	this.defense = defense;
	this.sante = sante;
    this.combattre = function(cible){
    	cible.sante = cible.sante - this.attack;
    	if (cible.sante < 50) {
    		console.log(this.nom + " " + "à infligé" + " "+ this.attack + " " + "points de degats à" + " " + cible.nom);
    		console.log("il reste" + " " + cible.sante + " " + "de vie" + " " + "à" + " " + cible.nom);
    	}
};

}



var Personnage1 = new Personnage ("martin", 20, 10, 50);
var Personnage2 = new Personnage ("Dupont", 10, 5, 30);


Personnage1.combattre(Personnage2);
Personnage2.combattre(Personnage1);