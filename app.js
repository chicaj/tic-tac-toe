'use strict';

function docardsmatch(card1, card2,node2,node2){
    setTimeout(function){
        node1.classList.remove('flip');
        node2.classList.remove('flip');
    },1000);

    if(card1.icon === card2.icon){
        node1.classList.add('match');
        node2.classList.add('match');
    }
    else{
        card1.flipped = false;
        card2.flipped = false;
    
    
    }
}
