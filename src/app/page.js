'use client'

import { useEffect, useState } from 'react';
import Web3 from 'web3';

const correctRockPaperScissorsABI = [
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

const contractAddress = "0xc1FB05267a5Bc91B0d17C1A7101A24D09CdC553e";

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
        const contractInstance = new web3Instance.eth.Contract(correctRockPaperScissorsABI, contractAddress);
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
            if (receipt.events.GameResult) {
                const gameResult = receipt.events.GameResult.returnValues.result;
                console.log("Game result:", gameResult);
                // Update UI with game result
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
                <button onClick={() => playGame("Rock")} className="px-4 py-2 bg-blue-500 text-white rounded-md">Rock</button>
                <button onClick={() => playGame("Paper")} className="px-4 py-2 bg-green-500 text-white rounded-md">Paper</button>
                <button onClick={() => playGame("Scissors")} className="px-4 py-2 bg-red-500 text-white rounded-md">Scissors</button>
            </div>
            <div id="result" className="mt-4"></div>
        </div>
    );
};

export default IndexPage;
