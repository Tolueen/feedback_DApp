
# Feedback DApp Project

This repository contains the smart contract code for a Feedback DApp (Decentralized Application). The FeedbackDApp smart contract allows users to submit feedback messages and retrieve feedback entries.

## SmartContract Details

The FeedbackDApp smart contract is implemented in Solidity, a high-level language for implementing smart contracts on the Ethereum blockchain. Here are some key details about the smart contract:

- **Contract Name:** FeedbackDApp
- **Solidity Version:** ^0.8.0
- **Compiler:** Solidity Compiler 
- **Dependencies:** None

### Functionality

- **submitFeedback(string memory _message):** Allows users to submit feedback messages.
- **getTotalFeedbacks():** Retrieves the total number of feedback entries.
- **getFeedback(uint256 _index):** Retrieves feedback by index.

## Getting Started

To use the FeedbackDApp smart contract, you can follow these steps:

1. Clone the repository to your local machine.
2. Deploy the smart contract to an Ethereum testnet or a local development blockchain.
3. Interact with the smart contract using Ethereum-compatible tools and libraries.

## Usage

Here's an example of how to interact with the FeedbackDApp smart contract:

1. Connect your Ethereum wallet to a compatible web3 provider.
2. Use the `submitFeedback` function to submit feedback messages.
3. Use the `getTotalFeedbacks` and `getFeedback` functions to retrieve feedback entries.

## License

This smart contract is released under the UNLICENSED license. You are free to use and modify the code for your own purposes. See the [LICENSE](LICENSE) file for more details.
