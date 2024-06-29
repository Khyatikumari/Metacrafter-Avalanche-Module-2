# Metacrafter-Avalanche-Module-2
// SPDX-License-Identifier: MIT
/*For this project, create a simple contract with 2-3 functions. Then show the values of those functions in frontend of the application. */
pragma solidity ^0.8.0;

contract SimpleContract {
    string public message;
    uint public counter;

    constructor(string memory initialMessage) {
        message = initialMessage;
        counter = 0;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function incrementCounter() public {
        counter += 1;
    }

    function getCounter() public view returns (uint) {
        return counter;
    }
}
