// Variables
var images_list = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
player_1 = document.getElementById('img_1');
player_2 = document.getElementById('img_2');
game_prompt = document.getElementsByTagName('h1');
score1 = 0;
score2 = 0;

// Random Index Generator
var get_random_index = function () {
    var random_index = Math.floor(Math.random()*6);
    return(random_index);
}

// Change dice based on random index
var change_image = function () {

    document.getElementById("img_1").src = images_list[player_1 = get_random_index()];
    document.getElementById("img_2").src = images_list[player_2 = get_random_index()];

}

// Check which dice is greater
var game = function() {
    change_image()
    if(player_1>player_2) {
        score1 = score1 + 5;
        document.getElementById('message').innerHTML    = " &#128681 Player 1 Wins";
        document.getElementById('player1').innerHTML    = "Player 1" + "<br/>" + "score: " + score1;
    }
    else if(player_1<player_2) {
        score2 = score2+5;
        document.getElementById('message').innerHTML    = " &#128681 Player 2 Wins";
        document.getElementById('player2').innerHTML    = "Player 2" + "<br/>" + "score: " + score2;
    }
    else {
        document.getElementById('message').innerHTML    = "DRAW!";
    }
}

var start_game = function () {
    document.addEventListener("keyup", (e) => { 
        if (e.code === "Space") {
            game()
        }
});
}


start_game()
