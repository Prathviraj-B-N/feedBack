const main = async ()=> {
    const [sampleOwner,samplePerson] = await hre.ethers.getSigners(); 
    const pingMsgContractFactory = await hre.ethers.getContractFactory("PingMsgContract");
    const pingMsgContract = await pingMsgContractFactory.deploy();
    await pingMsgContract.deployed();
    
    console.log(`Contract deployed on ${pingMsgContract.address} by ${sampleOwner.address}`);

    let count = await pingMsgContract.getMsgCount();

    const msgTxn = await pingMsgContract.pingMe();
    await msgTxn.wait();
    count = await pingMsgContract.getMsgCount();

    const connectSamplePerson = await pingMsgContract.connect(samplePerson);
    const msgTxn2 = await connectSamplePerson.pingMe();
    await msgTxn2.wait();

    await pingMsgContract.getMsgCount();


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