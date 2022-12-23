const main = async ()=> {
    const pingMsgContractFactory = await hre.ethers.getContractFactory("PingMsgContract");
    const pingMsgContract = await pingMsgContractFactory.deploy();
    await pingMsgContract.deployed();
    console.log("Contract deployed on ",pingMsgContract.address);
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