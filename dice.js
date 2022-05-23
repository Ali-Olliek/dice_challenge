var get_random_index = function () {
    var random_index = Math.floor(Math.random()*6);
    return(random_index);
    }

player_1 = document.getElementById('img_1');
player_2 = document.getElementById('img_2');
refresh = document.getElementById('refresh')

var change_image = function () {
    player_1 = get_random_index()
    player_2 = get_random_index()
        console.log(player_1,player_2);
}

change_image()