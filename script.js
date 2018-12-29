window.onload = function() { 
    for ( var i = 0; i < 9; i++) {
        document.getElementById('game').innerHTML += '<div class="block"></div>';
    }
    var running = 0;

    document.getElementById('game').onclick = function(event) {
        console.log(event);
        if (event.target.className == 'block') {
            if (running % 2 ==0 ) { 
                event.target.innerHTML = 'x';
            }else {
                event.target.innerHTML = '0';
            }
            running++;
            checkWinner();
        }
        function checkWinner() {
            var allBlock = document.getElementsByClassName('block');
            //console.log(allBlock);
            if (allBlock[0].innerHTML=='x' && allBlock[1].innerHTML=='x' && allBlock[2].innerHTML=='x') alert ('Победилй Крестики X');
            if (allBlock[3].innerHTML=='x' && allBlock[4].innerHTML=='x' && allBlock[5].innerHTML=='x') alert ('Победилй Крестики X');
            if (allBlock[6].innerHTML=='x' && allBlock[7].innerHTML=='x' && allBlock[8].innerHTML=='x') alert ('Победилй Крестики X');
            if (allBlock[0].innerHTML=='x' && allBlock[3].innerHTML=='x' && allBlock[6].innerHTML=='x') alert ('Победилй Крестики X');
            if (allBlock[1].innerHTML=='x' && allBlock[4].innerHTML=='x' && allBlock[7].innerHTML=='x') alert ('Победилй Крестики X');
            if (allBlock[2].innerHTML=='x' && allBlock[5].innerHTML=='x' && allBlock[8].innerHTML=='x') alert ('Победилй Крестики X');
            if (allBlock[0].innerHTML=='x' && allBlock[4].innerHTML=='x' && allBlock[8].innerHTML=='x') alert ('Победилй Крестики X');
            if (allBlock[2].innerHTML=='x' && allBlock[4].innerHTML=='x' && allBlock[6].innerHTML=='x') alert ('Победилй Крестики X');

            //ноликй

            if (allBlock[0].innerHTML=='0' && allBlock[1].innerHTML=='0' && allBlock[2].innerHTML=='0') alert ('Победилй Ноликй 0');
            if (allBlock[3].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[5].innerHTML=='0') alert ('Победилй Ноликй 0');
            if (allBlock[6].innerHTML=='0' && allBlock[7].innerHTML=='0' && allBlock[8].innerHTML=='0') alert ('Победилй Ноликй 0');
            if (allBlock[0].innerHTML=='0' && allBlock[3].innerHTML=='0' && allBlock[6].innerHTML=='0') alert ('Победилй Ноликй 0');
            if (allBlock[1].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[7].innerHTML=='0') alert ('Победилй Ноликй 0');
            if (allBlock[2].innerHTML=='0' && allBlock[5].innerHTML=='0' && allBlock[8].innerHTML=='0') alert ('Победилй Ноликй 0');
            if (allBlock[0].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[8].innerHTML=='0') alert ('Победилй Ноликй 0');
            if (allBlock[2].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[6].innerHTML=='0') alert ('Победилй Ноликй 0');



        }
    }
}