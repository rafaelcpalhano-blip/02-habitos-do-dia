import { useState } from "react";
import "./ranking.css";

export function Ranking() {
  
    const [pointsP1, setPointsP1] = useState(0);
    const [pointsP2, setPointsP2] = useState(0);
    const [resultGame, setResultGame] = useState ("");

    function plus100P1() {
        setPointsP1(pointsP1 + 100)
    }

    function plus500P1() {
        setPointsP1(pointsP1 + 500)
    }

     function plus100P2() {
        setPointsP2(pointsP2 + 100)
    }

    function plus500P2() {
        setPointsP2(pointsP2 + 500)
    }

    
 

    function endGame() {
        

        if (pointsP1 > pointsP2){
            console.log("Vencedor é Jogador 1");
            setResultGame("Jogador 1");

        }else if (pointsP1 < pointsP2) {
            console.log("Vencedor é o Jogador 2!");
            setResultGame("Jogador 2");
        } else {
            setResultGame("Empate");
        }
            
    }

       function resetScore() {
        setPointsP1(0);
        setPointsP2(0);
    }

    return (
        <>
            <div className="">
                <p>Jogador 1</p>
                <p>
                    <span>Score: { pointsP1 }</span>
                <button className="Button" onClick={plus100P1}>+100</button>
                <button onClick={plus500P1}>+500</button>
                </p>
            </div>
            <div className="">
                <p>Jogador 2</p>
                <p>
                    <span>Score: { pointsP2 }</span>
                <button onClick={plus100P2}>+100</button>
                <button onClick={plus500P2}>+500</button>
                </p>
            </div>


            
            <button onClick={() => {
    endGame();
    resetScore();
}}>
    Finalizar Partida
</button>
            {                resultGame == "Jogador 1" && <p>Vencedor foi o Jogador 1</p>    }
            {                resultGame == "Jogador 2" && <p>Vencedor foi o Jogador 2</p>    }
            {                resultGame == "Empate" && <p>O jogo Empatou!</p>     }
        </>
    );
}