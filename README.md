# Rock Paper Scissors Blockchain Game

## Description

The Rock Paper Scissors Blockchain Game is a decentralized application (dApp) that brings the classic game of Rock Paper Scissors to the Ethereum blockchain. This project demonstrates blockchain and smart contract capabilities in a fun, interactive way. Players can compete against a computerized opponent, and their choices are recorded and verified on the Ethereum network.

## Technologies Used

- **Solidity**: For writing the Ethereum smart contract.
- **React**: For building the front-end user interface.
- **Next.js**: As a React framework for server-side rendering and routing.
- **Truffle**: As a development framework for Ethereum.
- **Ganache**: For running a personal local blockchain for development purposes.
- **Web3.js**: A JavaScript library for interacting with the Ethereum blockchain.
- **MetaMask**: For Ethereum wallet and transaction management.

## Smart Contract

The `RockPaperScissors.sol` smart contract is the backbone of the game. It features key functions such as:

1. **Play Function**: Allows players to make their move (Rock, Paper, or Scissors) which is then compared against a computer-generated move.
2. **Randomness**: The contract implements basic randomness for the computer's move, making each game unique.
3. **Game Result**: After each play, the contract emits an event with the game result, which the front-end application listens for and displays to the user.

## Front-End

The front-end of the application is built with React and Next.js, consisting of:

- `src/page.js`: The main React component that users interact with.

### Installation

1. **Clone the Repository**: Clone this repository to your local machine.
2. **Set Up the Blockchain Environment**: Use Truffle and Ganache for a local Ethereum blockchain environment.
3. **Deploy the Contract**: Compile and migrate the smart contract to your local blockchain using Truffle.
4. **Connect the Front-End**: Update the contract's address and ABI in `src/page.js` with the relevant details from your deployment.

### Usage

1. **Run the Development Server**: Start the Next.js development server with `npm run dev`.
2. **Open the Application**: Visit `http://localhost:3000` in a web browser.
3. **Connect MetaMask**: Ensure MetaMask is set up with your local blockchain and has some test Ether.
4. **Play the Game**: Choose Rock, Paper, or Scissors and see the result against the computer's choice.
