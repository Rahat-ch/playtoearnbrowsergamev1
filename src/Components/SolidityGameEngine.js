import { useEffect, useState } from "react";
import abi from "../abi.json";
import { ethers } from "ethers";

const contractAddress = "0x44577B06E43Aa2afD7aa1B49d480e9b5eC33F6Dd"

const SolidityGameEngine = ({ welcomeMessage }) => {
  const choices = ["Rock", "Paper", "Scissor"];
  const [currChoice, setCurrChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [winner, setWinner] = useState("");
  const transactGame = async (bool) => {

    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(contractAddress, abi, signer);
        let playtxn = await connectedContract.play(bool, { value: "1000000000000000000" });
  
        await playtxn.wait();
  
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
      console.log(error.message)
    }
  }
  const gameEngine = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setCurrChoice(choice);
    setComputerChoice(computerChoice);
    switch (choice) {
      case "Rock":
        if (computerChoice === "Paper"){
            setWinner("Opponent")
            transactGame(false)
        };
        if (computerChoice === "Rock"){
            setWinner("Nobody");
            transactGame(false)
        };
        if (computerChoice === "Scissor"){
            setWinner("Player")
            transactGame(true)
        };
        break;
      case "Paper":
        if (computerChoice === "Paper"){
            setWinner("Nobody");
            transactGame(false)
        };
        if (computerChoice === "Rock"){
            setWinner("Player")
            transactGame(true)
        }
        if (computerChoice === "Scissor"){
            setWinner("Opponent")
            transactGame(false)
        };
        break;
      case "Scissor":
        if (computerChoice === "Paper"){
            setWinner("Player")
            transactGame(true)
        };
        if (computerChoice === "Rock"){
            setWinner("Opponent")
            transactGame(false)
        };
        if (computerChoice === "Scissor"){
            setWinner("Nobody");
            transactGame(false)
        }
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    
  })
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

export default SolidityGameEngine;
