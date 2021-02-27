


const play1 = "X";
const play2 = "O";

const backImage = document.querySelector('.backImage');
const slider = document.querySelector('.slider');


let gameTime = play1;
let gameOver = false;


const tl = new TimelineMax();

tl.fromTo(
    backImage,
    1,
     {height: "0%" },
     {height: "80%", ease: Power2.easeInOut} 
).fromTo( 
    backImage,
    1.2,
    {width: "100%"}, 
    {width: "80%",ease: Power2.easeInOut}
).fromTo(
    slider,
    1.2,
    {x:"-100%"},
    {x:'0%', ease: Power2.easeInOut},
    "-=1.2"
);


function playerMove(){

    if(gameOver){return;}

    if(gameTime == play1){

        const xImage = document.querySelectorAll("#images")[0];

        xImage.setAttribute('src','/Users/vitalb2b/Documents/jogoVelha_project/Images/s2.jpeg ');

        console.log(xImage)
    } else {

        var oImage = document.querySelectorAll("#images")[0];      
        oImage.setAttribute('src','/Users/vitalb2b/Documents/jogoVelha_project/Images/circle.jpeg');

    }
}

playerMove();
rederSpaces();

function rederSpaces(){

    let spaces = document.getElementsByClassName('espaco');
    for(let i =0; i < spaces.length; i++){

        spaces[i].addEventListener('click', function(){

            console.log(spaces[i]);

            if(gameOver){ return;}

            if(spaces[i].attributes[2].value != ""){

                alert(`Espaço preenchido`);



            }else{

                if(this.getElementsByClassName('img').length == 0){

                    if(gameTime == play1){
    
                        this.innerHTML = "<img src= /Users/vitalb2b/Documents/jogoVelha_project/Images/s2.jpeg  height='30' width='30' >";
                        this.setAttribute('play', play1);
    
                        gameTime = play2
                    }else{
    
                        this.innerHTML = "<img src= /Users/vitalb2b/Documents/jogoVelha_project/Images/circle.jpeg height='30' width='30'> ";
                        this.setAttribute('play', play2);
                        
                        gameTime = play1;
                    }
                    playerMove();
                    checkWinner();
                    
                }

            }
                
          
        })
    }

}


async function checkWinner(){

    //buscando os elementos
    let a1 = document.getElementById("a1").getAttribute("play");
    let a2 = document.getElementById("a2").getAttribute("play");
    let a3 = document.getElementById("a3").getAttribute("play");

    let b1 = document.getElementById("b1").getAttribute("play");
    let b2 = document.getElementById("b2").getAttribute("play");
    let b3 = document.getElementById("b3").getAttribute("play");

    let c1 = document.getElementById("c1").getAttribute("play");
    let c2 = document.getElementById("c2").getAttribute("play");
    let c3 = document.getElementById("c3").getAttribute("play");

    let btn_reset = document.querySelector('.btn-reset').addEventListener('click', () => {
        resetGame();
        console.log("Aqui!!!")
        
    })
 
 
 
    let winner = '';


    //calculo para encontrar o vencedor
    if((a1 == b1 && a1 == c1 ) || 
       (a1 == a2 && a1 == a3 ) || 
       (a1 == b2 && a1 == c3 ) && a1 != " " ){

                winner = a1;    

    } else if((b2 == b1 && b2 == b3 ) || 
              (b2 == a2 && b2 == c2 ) || 
              (b2 == a3 && b2 == c1 ) && b2 != " " ) {

                winner = b2;
     
    } else if((c3 == c2 && c3 == c1 ) || 
               (c3 == a3 && c3 == b3 ) && c3 != " ") {

                winner = c3;
            }
            if(winner != ''){

                gameOver = true;

                //funcao para esperar completar a verificacao do vencedor e mostrar o alerta
                await sleep (50);
                alert(`O gahador foi ${winner}`);
            }
            
}


function sleep (ms){

    return new Promise(resolve => setTimeout(resolve, ms));
}




function resetGame(){
    var mySong = document.getElementById("songs");
    mySong.play();
    return document.location.reload(true);
 
}



