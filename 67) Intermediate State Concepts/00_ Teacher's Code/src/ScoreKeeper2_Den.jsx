// import { useState } from "react";

// export default function ScoreKeeper2_Den({numOfPlayers, targetScore}) {
//     const scoresOfPlayers = new Array(numOfPlayers).fill(0);

//     const players = [];    

//     for (let i = 0; i < numOfPlayers; i++) {
//         players.push({ name: "", score: 0 });
//       }

//     players.forEach((element, index) => {
//         element.name = `Player ${index + 1}`;
//     });

//     // [score, setScore] = useState(0);

//     // const addOne = () => {
//     //     setScore((oldScore) => )
//     // }


//     return (
//         <div>
//             <ul>                
//                 {players.map((player, index) => (
//                     <li key={index}>{player.name}:  0 
//                         <span>
//                             <button onClick>+1</button>
                    
//                         </span>
//                     </li>
                    
//                 ))}
//             </ul>
//         </div>
//     )
// }

// ------------------------------------------------

import React, { useState } from "react";

export default function ScoreKeeper2_Den({ numOfPlayers, targetScore }) {
  // Initialize an array to store the scores of each player
  const [scoresOfPlayers, setScoresOfPlayers] = useState(
    new Array(numOfPlayers).fill(0)
  );

  // State variable to track whether the game is over
  const [gameOver, setGameOver] = useState(false);

  const players = [];

  for (let i = 0; i < numOfPlayers; i++) {
    players.push({ name: "", score: 0 });
  }

  players.forEach((element, index) => {
    element.name = `Player ${index + 1}`;
  });

  // Function to handle the '+1' button click for a specific player
  const handleIncrementScore = (index) => {
    if (!gameOver) {
      const newScores = [...scoresOfPlayers];
      newScores[index] += 1;
      setScoresOfPlayers(newScores);

      // Check if any player has reached the target score
      if (newScores.some((score) => score >= targetScore)) {
        setGameOver(true);
      }
    }
  };

  return (
    <div>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name}: {scoresOfPlayers[index]}
            <span>
              <button
                onClick={() => handleIncrementScore(index)}
                disabled={gameOver || scoresOfPlayers[index] >= targetScore}
              >
                +1
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}