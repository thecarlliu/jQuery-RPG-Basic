var gamePhase = 0;

var rey = $("<div>", {
	id: "charRey"
});
var luke = $("<div>", {
	id: "charLuke"
});
var kylo = $("<div>", {
	id: "charKylo"
});
var finn = $("<div>", {
	id: "charFinn"
});

var reyName = $("<div>", {
	id: "nameRey",
	text: "Rey"
});
var lukeName = $("<div>", {
	id: "nameLuke",
	text: "Luke Skywalker"
});
var kyloName = $("<div>", {
	id: "nameKylo",
	text: "Kylo Ren"
});
var finnName = $("<div>", {
	id: "nameFinn",
	text: "Finn"
});

var reyImg = $("<img>", {
	id: "imgRey",
	src: "../jQuery-RPG-Basic/assets/images/rey.jpeg"
});
var lukeImg = $("<img>", {
	id: "imgLuke",
	src: "../jQuery-RPG-Basic/assets/images/luke.png"
});
var kyloImg = $("<img>", {
	id: "imgKylo",
	src: "../jQuery-RPG-Basic/assets/images/kylo.jpeg"
});
var finnImg = $("<img>", {
	id: "imgFinn",
	src: "../jQuery-RPG-Basic/assets/images/finn.jpg"
});

var reyHP = $("<div>", {
	id: "hpRey",
	text: "120"
});
var lukeHP = $("<div>", {
	id: "hpLuke",
	text: "100"
});
var kyloHP = $("<div>", {
	id: "hpKylo",
	text: "150"
});
var finnHP = $("<div>", {
	id: "hpFinn",
	text: "180"
});

var charList = [rey, luke, kylo, finn];

reyName.appendTo(rey);
reyImg.appendTo(rey);
reyHP.appendTo(rey);

lukeName.appendTo(luke);
lukeImg.appendTo(luke);
lukeHP.appendTo(luke);

kyloName.appendTo(kylo);
kyloImg.appendTo(kylo);
kyloHP.appendTo(kylo);

finnName.appendTo(finn);
finnImg.appendTo(finn);
finnHP.appendTo(finn);

rey.appendTo($(".gameScreen"));
luke.appendTo($(".gameScreen"));
kylo.appendTo($(".gameScreen"));
finn.appendTo($(".gameScreen"));

rey.click(function () {
	if (gamePhase == 0) {
		rey.appendTo($(".yourCharacter"));
		luke.appendTo($(".enemiesAvailableToAttack"));
		kylo.appendTo($(".enemiesAvailableToAttack"));
		finn.appendTo($(".enemiesAvailableToAttack"));
		gamePhase = 1;
	}
	else if (gamePhase == 1) {
		rey.appendTo($(".defender"));
		gamePhase = 2;
	}
});
luke.click(function () {
	if (gamePhase == 0) {
		luke.appendTo($(".yourCharacter"));
		kylo.appendTo($(".enemiesAvailableToAttack"));
		finn.appendTo($(".enemiesAvailableToAttack"));
		rey.appendTo($(".enemiesAvailableToAttack"));
		gamePhase = 1;
	}
	else if (gamePhase == 1) {
		luke.appendTo($(".defender"));
		gamePhase = 2;
	}
});
kylo.click(function () {
	if (gamePhase == 0) {
		kylo.appendTo($(".yourCharacter"));
		finn.appendTo($(".enemiesAvailableToAttack"));
		rey.appendTo($(".enemiesAvailableToAttack"));
		luke.appendTo($(".enemiesAvailableToAttack"));
		gamePhase = 1;
	}
	else if (gamePhase == 1) {
		kylo.appendTo($(".defender"));
		gamePhase = 2;
	}
});
finn.click(function () {
	if (gamePhase == 0) {
		finn.appendTo($(".yourCharacter"));
		rey.appendTo($(".enemiesAvailableToAttack"));
		luke.appendTo($(".enemiesAvailableToAttack"));
		kylo.appendTo($(".enemiesAvailableToAttack"));
		gamePhase = 1;
	}
	else if (gamePhase == 1) {
		finn.appendTo($(".defender"));
		gamePhase = 2;
	}
});

if(gamePhase == 2) {
	var attackBtn = $("<button>", {
	id: "attack-button"
	});
	attackBtn.appendTo($(".gameScreen"));
	attackBtn.click( function () {
		//get player = Your Character, defender = Defender
		//playerAttack(player, defender); do damage to the enemy and scale damage for the next attack
		//counterAttack(defender, player); receive damage from enemy based on their attack stat
	});
	//if enemy hp <= 0, remove current defender and set gamePhase = 1, choose new defender.
	//if player hp <= 0, player loses.
}

//if gamePhase == 1, and no enemiesAvailableToAttack, player wins






























