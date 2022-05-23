var images_list = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
player_1 = document.getElementById('img_1');
player_2 = document.getElementById('img_2');
game_prompt = document.getElementsByTagName('h1');

var get_random_index = function () {
    var random_index = Math.floor(Math.random()*6);
    return(random_index);
    }

var change_image = function () {

    document.getElementById("img_1").src = images_list[player_1 = get_random_index()];
    document.getElementById("img_2").src = images_list[player_2 = get_random_index()];
}

var game = function() {
    change_image()
    if(player_1>player_2) {
        document.getElementById('message').innerHTML    = " &#128681 Player 1 Wins"
    }
    else if(player_1<player_2) {
        document.getElementById('message').innerHTML    = " &#128681 Player 2 Wins"

    }
    else {
        document.getElementById('message').innerHTML    = "DRAW!"
    }
}

game()

