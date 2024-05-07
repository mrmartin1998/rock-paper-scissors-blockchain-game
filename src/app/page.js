'use client'

import { useEffect, useState } from 'react';
import Web3 from 'web3';
import './globals.css'; // Import the global stylesheet

const RockPaperScissorsABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "result",
        "type": "string"
      }
    ],
    "name": "GameResult",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "enum RockPaperScissors.Move",
        "name": "playerMove",
        "type": "uint8"
      }
    ],
    "name": "play",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const contractAddress = "0x6bAcf50321eA53CBA15F54162E6391897b33aEE4";

const IndexPage = () => {
    const [web3, setWeb3] = useState(null);
    const [rockPaperScissorsContract, setRockPaperScissorsContract] = useState(null);

    useEffect(() => {
        const connectMetaMask = async () => {
            if (typeof window.ethereum !== 'undefined') {
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    console.log("Connected to MetaMask");
                    initializeWeb3AndContract();
                } catch (error) {
                    console.error("User denied account access:", error);
                }
            } else {
                console.error("MetaMask is not installed!");
            }
        };

        connectMetaMask();
    }, []);

    const initializeWeb3AndContract = () => {
        const web3Instance = new Web3(window.ethereum);
        const contractInstance = new web3Instance.eth.Contract(RockPaperScissorsABI, contractAddress);
        console.log("Web3 and Contract Initialized");
        setWeb3(web3Instance);
        setRockPaperScissorsContract(contractInstance);
    };

    const playGame = async (playerChoice) => {
      console.log(`Attempting to play game with choice: ${playerChoice}`);
      if (!web3 || !rockPaperScissorsContract) {
          console.error("Web3 or contract not initialized");
          return;
      }
  
      const move = { "Rock": 0, "Paper": 1, "Scissors": 2 }[playerChoice];
  
      try {
          const accounts = await web3.eth.getAccounts();
          const playerAccount = accounts[0];
          console.log("Using account:", playerAccount);
          const receipt = await rockPaperScissorsContract.methods.play(move).send({ from: playerAccount });
          console.log("Transaction receipt:", receipt);
          
          // Check if the GameResult event exists in the receipt
          if (receipt.events && receipt.events.GameResult) {
              const gameResult = receipt.events.GameResult.returnValues.result;
              console.log("Game result:", gameResult);
              // Update UI with game result
          } else {
              console.log("Game result event not found in transaction receipt");
              // Handle case where GameResult event is not emitted
          }
      } catch (err) {
          console.error("Error playing the game:", err);
          // Update UI with error message
      }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl mb-4">Rock Paper Scissors Game</h1>
        <div id="game" className="flex gap-4">
            <button onClick={() => playGame("Rock")} className="btn btn-option">Rock</button>
            <button onClick={() => playGame("Paper")} className="btn btn-option">Paper</button>
            <button onClick={() => playGame("Scissors")} className="btn btn-option">Scissors</button>
        </div>
        <div id="result" className="mt-4"></div>
    </div>
);
};

export default IndexPage;
