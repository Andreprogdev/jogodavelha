    document.addEventListener('DOMContentLoaded',()=>{
    let squares = document.querySelectorAll(".square");

//ForEache é um tipo de for APRIMORADO, ele executa uma função em cada elemento do ARRAY! Nesse caso, ele está executando o EVENTO  
        squares.forEach((square) =>{
        square.addEventListener ('click', handleClick);
    })
});


function playerWin(){
            setTimeout(() =>{
            winner.innerHTML = `${playerTime} VENCEU!`;
        }, 10);

}


//TARGET se refere ao elemento que SOFREU o evento, nesse caso, vai imprimir os elementos clicados.
function handleClick(event){
    
    let square = event.target;
    let position = square.id;
    let winner = document.getElementById("winner")
    
    
    if(handleMove(position)){
        if(playerTime == 0){
            playerTime = 'JOGADOR 1';
            playerWin();
        }else{
            playerTime = 'JOGADOR 2';
            playerWin();
        }    
    }else if(board[0] && board[1] && board[2] && board[3] && board[4] && board[5] && board[6] && board[7] && board[8] != ''){
        setTimeout(() => {alert("DEU VELHA, DÁ RESET MONGOL")}, 100);
    }
    updateSquares();
};

function updateSquares(){
    
    let squares = document.querySelectorAll(".square");
        
        squares.forEach((square) =>{
            let position = square.id;
            let symbols = board[position];
        
            if(symbols != ''){
            square.innerHTML = `<div class='${symbols}'></div>`
        }
    })
};

let bnt  = document.getElementById("reset");
bnt.addEventListener("click", resetGame);

function resetGame(){
    reset(); 
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) =>{
        square.innerHTML = "";
        winner.innerHTML = "";
        
    })
}

