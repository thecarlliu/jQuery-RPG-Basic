var gamePhase = 0;
var player;
var opponent;
var timesAttacked = 1;
var enemiesLeft = 3;

//playable Characters
var rey = $("<div>", {
	id: "charRey",
	attack: 15,
	counter: 15,
	hp: 120
});
var luke = $("<div>", {
	id: "charLuke",
	attack: 25,
	counter: 30,
	hp: 100
});
var kylo = $("<div>", {
	id: "charKylo",
	attack: 30,
	counter: 10,
	hp: 140
});
var finn = $("<div>", {
	id: "charFinn",
	attack: 10,
	counter: 20,
	hp: 160
});
//name display for each char
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
//img for each char
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
//hp display for each char
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
	text: "140"
});
var finnHP = $("<div>", {
	id: "hpFinn",
	text: "160"
});

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

//click functions for each char
//tells the game what to do with a char and the others based on when it was clicked (gamePhase)
rey.click(function () {
	if (gamePhase == 0) {
		rey.appendTo($(".yourCharacter"));
		luke.appendTo($(".enemiesAvailableToAttack"));
		kylo.appendTo($(".enemiesAvailableToAttack"));
		finn.appendTo($(".enemiesAvailableToAttack"));
		gamePhase = 1;
		player = rey;
	}
	else if (gamePhase == 1) {
		rey.appendTo($(".defender"));
		gamePhase = 2;
		opponent = rey;
	}
});
luke.click(function () {
	if (gamePhase == 0) {
		luke.appendTo($(".yourCharacter"));
		kylo.appendTo($(".enemiesAvailableToAttack"));
		finn.appendTo($(".enemiesAvailableToAttack"));
		rey.appendTo($(".enemiesAvailableToAttack"));
		gamePhase = 1;
		player = luke;
	}
	else if (gamePhase == 1) {
		luke.appendTo($(".defender"));
		gamePhase = 2;
		opponent = luke;
	}
});
kylo.click(function () {
	if (gamePhase == 0) {
		kylo.appendTo($(".yourCharacter"));
		finn.appendTo($(".enemiesAvailableToAttack"));
		rey.appendTo($(".enemiesAvailableToAttack"));
		luke.appendTo($(".enemiesAvailableToAttack"));
		gamePhase = 1;
		player = kylo;
	}
	else if (gamePhase == 1) {
		kylo.appendTo($(".defender"));
		gamePhase = 2;
		opponent = kylo;
	}
});
finn.click(function () {
	if (gamePhase == 0) {
		finn.appendTo($(".yourCharacter"));
		rey.appendTo($(".enemiesAvailableToAttack"));
		luke.appendTo($(".enemiesAvailableToAttack"));
		kylo.appendTo($(".enemiesAvailableToAttack"));
		gamePhase = 1;
		player = finn;
	}
	else if (gamePhase == 1) {
		finn.appendTo($(".defender"));
		gamePhase = 2;
		opponent = finn;
	}
});

//click function for our attack button
//only does something once a player has chosen their character and a defender to attack
var attackBtn = $("#attack-button");
attackBtn.click( function () {
	if (gamePhase == 2) {
		console.log(player);
		console.log(opponent);
		playerAttack(player, opponent);
		counterAttack(player, opponent);
		checkResult(player, opponent);
	}
});

//calculates the dmg dealt to the enemyChar and changes hp displays appropriately
function playerAttack(yourChar, enemyChar) {
	console.log($(enemyChar).attr("hp"));
	var previousHP = $(enemyChar).attr("hp");
	var damageDealt = $(yourChar).attr("attack");
	var newHP = previousHP - damageDealt * timesAttacked;
	$(enemyChar).attr("hp", newHP);
	if (enemyChar == rey) {
		reyHP.text(newHP);
	}
	else if (enemyChar == luke) {
		lukeHP.text(newHP);
	}
	else if (enemyChar == kylo) {
		kyloHP.text(newHP);
	}
	else if (enemyChar == finn) {
		finnHP.text(newHP);
	}
	console.log($(enemyChar).attr("hp"));
	timesAttacked++;
}

//calculates dmg received by the player from the enemy's counter attack and changes the hp displays appropriately
function counterAttack(yourChar, enemyChar) {
	console.log($(yourChar).attr("hp"));
	var previousHP = $(yourChar).attr("hp");
	var damageReceived = $(enemyChar).attr("counter");
	var newHP = previousHP - damageReceived;
	$(yourChar).attr("hp", newHP);
	if (yourChar == rey) {
		reyHP.text(newHP);
	}
	else if (yourChar == luke) {
		lukeHP.text(newHP);
	}
	else if (yourChar == kylo) {
		kyloHP.text(newHP);
	}
	else if (yourChar == finn) {
		finnHP.text(newHP);
	}
	console.log($(yourChar).attr("hp"));
}

//checks the players hp and enemy hp, decides if the player has lost or if the enemy is beaten
//if all enemies are beaten the player wins
function checkResult(yourChar, enemyChar) {
	if ($(enemyChar).attr("hp") <= 0 && $(yourChar).attr("hp") > 0) {
		enemiesLeft--;
		$(enemyChar).remove();
		gamePhase = 1;
		if (enemiesLeft == 0) {
			alert("No enemies left to battle! You win!");
		}
	}
	else if ($(yourChar).attr("hp") <= 0) {
		alert("Your character has lost all its hp! You lose!");
	}
}






























