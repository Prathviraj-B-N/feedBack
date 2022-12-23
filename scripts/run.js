const main = async ()=> {
    const [sampleOwner,samplePerson] = await hre.ethers.getSigners(); 
    const pingMsgContractFactory = await hre.ethers.getContractFactory("PingMsgContract");
    const pingMsgContract = await pingMsgContractFactory.deploy();
    await pingMsgContract.deployed();
    
    console.log(`Contract deployed on ${pingMsgContract.address} by ${sampleOwner}`);

    let count = await pingMsgContract.getMsgCount();

    const msgTxn = await pingMsgContract.pingMe();
    await msgTxn.wait();
    count = await pingMsgContract.getMsgCount();


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