import { useState } from "react";

const Web2Game = ({ welcomeMessage }) => {
  const choices = ["Rock", "Paper", "Scissor"];
  const [currChoice, setCurrChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [winner, setWinner] = useState("");
  const gameEngine = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setCurrChoice(choice);
    setComputerChoice(computerChoice);
    switch (choice) {
      case "Rock":
        if (computerChoice === "Paper") setWinner("Opponent");
        if (computerChoice === "Rock") setWinner("Nobody");
        if (computerChoice === "Scissor") setWinner("Player");
        break;
      case "Paper":
        if (computerChoice === "Paper") setWinner("Nobody");
        if (computerChoice === "Rock") setWinner("Player");
        if (computerChoice === "Scissor") setWinner("Opponent");
        break;
      case "Scissor":
        if (computerChoice === "Paper") setWinner("Player");
        if (computerChoice === "Rock") setWinner("Opponent");
        if (computerChoice === "Scissor") setWinner("Nobody");
        break;
      default:
        break;
    }
  };
  return (
    <div className="game-container">
      <h3>{welcomeMessage}</h3>
      {currChoice && <h3>You Chose: {currChoice}</h3>}
      {computerChoice && <h3>Opponent Chose: {computerChoice}</h3>}
      {winner && <h3>{winner} wins</h3>}
      {choices.map((choice) => (
        <button onClick={() => gameEngine(choice)} className="button-28">
          {choice}
        </button>
      ))}
    </div>
  );
};

export default Web2Game;
