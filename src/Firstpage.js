import React, {useState} from 'react';
import './Firstpage.css'
import rock from "./Resources/rock.png"
import paper from "./Resources/paper.png"
import scissor from "./Resources/scissor.png"
import confetti from './Resources/confetti-unscreen.gif'

import rrock from "./Resources/rrock.png"
import rpaper from "./Resources/rpaper.png"
import rscissor from "./Resources/rscissor.png"

function Firstpage() {

    const [pscore, setPscore] = useState(0);
    const [cscore, setCscore] = useState(0);
    const [start, setStart] = useState(false);
    
    if(pscore === 3 || cscore === 3){
        let message = document.getElementById('winMsg');
        let msg = document.getElementById('message');
        msg.style.display = 'none';
        message.style.display = "block";
        (pscore > cscore) ? message.innerHTML = "You won the Game" : message.innerHTML = "Computer won the game";

        let conf  = document.getElementById("confetti")
        conf.style.display = "block";
        if(pscore > cscore){
            conf.style.left = "15%";
        }else{
            conf.style.right = "15%";            
        }

        let buttons = document.getElementById("buttons");
        buttons.style.opacity = 0;
        buttons.style.pointerEvents = "none";
        document.getElementById("restartBtn").style.display = "block";
    }

    function playGame(playerSelection){

        let playerimg = document.getElementById("playerimg");
        let computerimg = document.getElementById("computerimg");
        let computerMsg = document.getElementById("computerMsg");
        let buttons = document.getElementById("buttons");
        let message = document.getElementById("message");
        message.style.display = "none";
        buttons.style.display = "none";

        playerimg.src = rock;
        computerimg.src = rrock;

        playerimg.style.animationName = "player-animation";
        computerimg.style.animationName = "computer-animation";

        computerMsg.innerHTML = "Stone... Paper... Scissor...";
        computerMsg.style.width = "100%";

        const computerSelection = Math.floor(Math.random() * 3);

        setTimeout(() => {

            playerimg.style.animationName = "";
            computerimg.style.animationName = "";
            computerMsg.style.width = "40%";

            if(playerSelection === 0){
                playerimg.src = rock;
            }else if(playerSelection === 1){
                playerimg.src = paper;
            }else if(playerSelection === 2){
                playerimg.src = scissor
            }

            computerMsg.innerHTML = "";

            if(computerSelection === 0){
                computerimg.src = rrock;
            }else if(computerSelection === 1){
                computerimg.src = rpaper;
            }else if(computerSelection === 2){
                computerimg.src = rscissor
            }

            message.style.display = "block";

            if(playerSelection === computerSelection){
                message.innerHTML = "Tie";
                buttons.style.display = "flex";
                return;
            }

            if(playerSelection === 0){
                if(computerSelection === 1){
                    message.innerHTML = "Computer wins!";
                    setCscore(cscore+1);
                }else if(computerSelection === 2){
                    message.innerHTML = "You wins!";
                    setPscore(pscore+1);
                }
            }else if(playerSelection === 1){
                if(computerSelection === 0){
                    message.innerHTML = "You wins!";
                    setPscore(pscore+1);
                }else if(computerSelection === 2){
                    message.innerHTML = "Computer wins!";
                    setCscore(cscore+1);
                }
            }else if(playerSelection === 2){
                if(computerSelection === 0){
                    message.innerHTML = "Computer wins!";
                    setCscore(cscore+1);
                }else if(computerSelection === 1){
                    message.innerHTML = "You wins!";
                    setPscore(pscore+1);
                }
            }
            buttons.style.display = "flex";
        }, 1600);


        setTimeout(() => {
                message.style.display = "none";
        }, 4000);

    }
    const restartGame = () => {
        window.location.reload()
    }
    
    const handleStart = ()=>{
        setStart(!start);
        document.getElementById("startGame").style.display = "none";
    }   

  return (
    <div>
        <button className="playGame" id='startGame' onClick={handleStart}>Play Game</button>
        <img src={confetti} alt="confetti" id="confetti" />
        <div className="winmessage" id='winMsg'></div>
        <div className="message" id='message'></div>
        <div className="scoreBar">
            <div className="Score">
                <div className="heading">You</div>
                <div className="score" id='pScore'>
                    {pscore}/3
                </div>
            </div>
            <div className="Score">
                <div className="heading">Computer</div>
                <div className="score">
                    {cscore}/3
                </div>
            </div>
        </div>
        <div className='container'>
            <div className="player section">
                <img src={rock} alt="rps" id='playerimg'/>
            </div>
            <div className="computer section">
                <img src={rrock} alt="rps" id='computerimg'/>
            </div>
        </div>
       { start && (
         <div className="buttons">
         <div id='buttons'>
              <button className="btn" onClick={()=>{playGame(0)}}><img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/30/null/external-stone-geography-icongeek26-linear-colour-icongeek26.png" alt='icon' className='icon'/> Stone</button>
              <button className="btn" onClick={()=>{playGame(1)}}><img src="https://img.icons8.com/plasticine/30/null/paper.png" alt='icon' className='icon'/> Paper</button>
              <button className="btn" onClick={()=>{playGame(2)}}><img src="https://img.icons8.com/external-flat-deni-mao/30/null/external-scissor-school-and-education-flat-deni-mao.png" alt='icon' className='icon'/> Scissor</button>
         </div>
          <div className="computermessage" id='computerMsg'></div>
      </div>
       )}
        <button className="restartBtn" onClick={()=>{restartGame()}} id="restartBtn" >Restart Game</button>
    </div>
  )
}

export default Firstpage
