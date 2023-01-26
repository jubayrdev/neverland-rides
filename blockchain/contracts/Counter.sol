// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Counter {
    uint256 public count;

    constructor() {
        count = 0;
    }

    function incrementByHundred() public {
        count += 100;
    }
}
