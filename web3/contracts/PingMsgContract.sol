// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract PingMsgContract { 
    constructor(){
        console.log("Hi im a smart contract!");
    }

    uint256 msgCount;
    string customMsg = "Hey";

    function  pingMe() public {
        msgCount += 1;
        console.log("%s has said %s", msg.sender, customMsg);
    }

    function getMsgCount() public view returns (uint256) {
        console.log("You got %s messages!!",msgCount);
        return msgCount;
    }
}