// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;  //version of solidity 

import "hardhat/console.sol"; // Importing hardhat to be able to log to console

contract FeedbackDApp {
    
    // Struct to represent feedback
    struct Feedback {
        address user; // Address of the user who submitted the feedback
        string message; // Feedback message
    }

    // Array to store feedback
    Feedback[] public feedbacks;

    // Event to emit when feedback is submitted
    event FeedbackSubmitted(address indexed user, string message);

    // Function to submit feedback
    function submitFeedback(string memory _message) public {
        // Require that the message is not empty
        require(bytes(_message).length > 0, "Message cannot be empty");

        // Add feedback to the array
        feedbacks.push(Feedback(msg.sender, _message));

        // Emit event
        emit FeedbackSubmitted(msg.sender, _message);
    }

    // Function to get the total number of feedbacks
    function getTotalFeedbacks() public view returns (uint256) {
        return feedbacks.length;
    }

    // Function to get feedback by index
    function getFeedback(uint256 _index) public view returns (address, string memory) {
        require(_index < feedbacks.length, "Index out of range");

        Feedback memory feedback = feedbacks[_index];
        return (feedback.user, feedback.message);
    }
}

