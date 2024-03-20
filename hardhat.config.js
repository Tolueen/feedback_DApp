require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url:"https://omniscient-lingering-glade.ethereum-sepolia.quiknode.pro/3b144694f17739578b1b939583de5c7cb6642c6c/",
      accounts: ["e2ec0498c89d4a6ef1ec1f26ed3cb686eb1d36046df7a980b96af2292929019b"],
    },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  },
  
}