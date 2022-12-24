Hardhat - Provides local setup to simulate blockchain
solidity - used to define smart-contract

scripts 
        - used to compile smart contract
        - deploy on local chain ( I know this is stupid 😭)
        - execute transactions

npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
npx hardhat run scripts/run.js

QuickNode 
        - essentially helps us broadcast our contract creation transaction so that it can be picked up by miners as quickly as possible.