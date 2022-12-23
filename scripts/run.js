const main = async ()=> {
    waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to ",waveContract.address );
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