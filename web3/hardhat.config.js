require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
      console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://black-sleek-seed.ethereum-goerli.discover.quiknode.pro/a24ea5f6eb6714decf75728db5704e9860956728/",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
