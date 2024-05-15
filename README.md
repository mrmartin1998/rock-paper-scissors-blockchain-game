# Rock Paper Scissors Blockchain Game

## Introduction

Welcome to the **Rock Paper Scissors Blockchain Game**, a decentralized application (DApp) that brings the classic game of Rock Paper Scissors to the Ethereum blockchain. This project demonstrates my capabilities in blockchain development, smart contract implementation, and full-stack development. Players can compete against a computerized opponent, and their choices are recorded and verified on the Ethereum network.

## Features

- **Decentralized Gameplay**: Play Rock Paper Scissors in a decentralized environment.
- **Smart Contracts**: Secure and transparent game logic implemented with Ethereum smart contracts.
- **Randomness**: Basic randomness for computer moves to ensure fairness.
- **Event-Driven Results**: Game results are emitted as events and displayed to users.
- **Responsive Design**: A user-friendly interface built with modern web technologies.

## Technology Stack

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

### Backend
- **Next.js API Routes**: Serverless functions for handling backend logic.
- **Vercel**: A platform for hosting the Next.js application.

### Blockchain
- **Truffle Framework**: A development environment for Ethereum smart contracts.
- **Ganache**: A personal blockchain for Ethereum development.
- **Solidity**: The programming language for writing Ethereum smart contracts.
- **Web3.js**: A JavaScript library for interacting with the Ethereum blockchain.
- **MetaMask**: For Ethereum wallet and transaction management.

## Project Structure

### Smart Contract

The core of the Rock Paper Scissors Blockchain Game is the `RockPaperScissors` smart contract. It includes key functionalities such as:
- **Play Function**: Allows players to make their move (Rock, Paper, or Scissors) which is then compared against a computer-generated move.
- **Randomness**: Implements basic randomness for the computer's move, making each game unique.
- **Game Result Event**: After each play, the contract emits an event with the game result, which the front-end application listens for and displays to the user.

### Frontend Implementation

The frontend is built using React.js and Next.js, with Tailwind CSS for styling. It interacts with the smart contract to handle user interactions and display game results.

### Key Components

1. **IndexPage**: The main React component where users interact with the game.
2. **Layout**: Defines the basic layout and metadata for the application.

## How to Run the Project

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/mrmartin1998/rock-paper-scissors-blockchain-game.git
    cd rock-paper-scissors-blockchain-game
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Start Ganache** (Personal Ethereum Blockchain):
    ```sh
    ganache-cli
    ```

4. **Deploy Smart Contracts**:
    ```sh
    truffle migrate --network development
    ```

5. **Run the Application**:
    ```sh
    npm run dev
    ```

6. **Open in Browser**:
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. **Run the Development Server**: Start the Next.js development server with `npm run dev`.
2. **Open the Application**: Visit `http://localhost:3000` in a web browser.
3. **Connect MetaMask**: Ensure MetaMask is set up with your local blockchain and has some test Ether.
4. **Play the Game**: Choose Rock, Paper, or Scissors and see the result against the computer's choice.

## Conclusion

This project demonstrates my ability to develop a full-stack decentralized application using modern technologies. It showcases my skills in smart contract development, blockchain integration, and building responsive web applications. Thank you for reviewing my project!

---

*Feel free to reach out to me for any questions or further discussions about this project.*

---

**Contact Information:**

- **Email**: martinemilbrabenec@gmail.com
- **LinkedIn**: [Martin Emil Brabenec](https://www.linkedin.com/in/martin-emil-brabenec-33b818148/)
- **GitHub**: [mrmartin1998](https://github.com/mrmartin1998/)
