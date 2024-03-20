
// Get contract factory
const main = async () => {
    const feedbackContractFactory = await hre.ethers.getContractFactory("FeedbackDApp"); 
    const feedbackContract = await feedbackContractFactory.deploy(); // Deploy the contract
    feedbackContract.waitForDeployment();
    console.log("Contract deployed at address:", feedbackContract.address); // Log deployed contract address
    
    // Submit a feedback message
    await feedbackContract.submitFeedback("This is my first feedback"); 

    // Get total feedback count
    const totalFeedbacks = await feedbackContract.getTotalFeedbacks(); 

    // Log total feedback count
    console.log("Total feedbacks:", totalFeedbacks.toNumber()); 
    
    // Get feedback by index
    const [user, message] = await feedbackContract.getFeedback(0); 

    // Log feedback details
    console.log("Feedback:", { user, message }); 
};



const runMain = async () => {
    try{
        await main();
        process.exit(0); //exit node process without error
    } catch (error) {
        console.log(error);
        process.exit(1); //exit node process while indicatng "uncaught Fatal exception" error
    }
};
runMain(); 