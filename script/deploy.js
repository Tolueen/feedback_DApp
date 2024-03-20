const {ethers} = require("hardhat");

async function main() {
 
  const random = await hre.ethers.deployContract("FeedbackDApp");

  await random.waitForDeployment();

  console.log(
    "Verify Contract Address:", random.target
  );

  

  // Verify the contract after deploying.
   await hre.run("verify:verify", {
    address: random.target
   });
}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});