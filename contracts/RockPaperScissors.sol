// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RockPaperScissors {
    enum Move { Rock, Paper, Scissors }
    
    // Event to emit the result of the game.
    event GameResult(string result);

    function play(Move playerMove) public returns (string memory) {
        uint computerMove = uint(keccak256(abi.encodePacked(block.timestamp))) % 3;
        Move compMove = Move(computerMove);
        string memory outcome;

        if(playerMove == compMove) {
            outcome = "It's a draw!";
        } else if ((playerMove == Move.Rock && compMove == Move.Scissors) || 
                   (playerMove == Move.Scissors && compMove == Move.Paper) || 
                   (playerMove == Move.Paper && compMove == Move.Rock)) {
            outcome = "Player wins!";
        } else {
            outcome = "Computer wins!";
        }
        
        emit GameResult(outcome); // Emitting the event with the game result
        return outcome;
    }
}
