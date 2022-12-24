const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accBalance = await deployer.getBalance();

    console.log("Deploying contacts with ",deployer.address);
    console.log("Acc balance is ", accBalance.toString());

    const pingMsgContractFactory = await hre.ethers.getContractFactory("PingMsgContract");
    const pingMsgContract = await pingMsgContractFactory.deploy();
    await pingMsgContract.deployed();

    console.log("Contract Address ",pingMsgContract.address);

}

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}

runMain();