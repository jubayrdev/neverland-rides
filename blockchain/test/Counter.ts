import { ethers } from "hardhat";
import { expect } from "chai";

describe("Counter", function () {
    it("Should increment counter", async function () {
        const Counter = await ethers.getContractFactory("Counter");
        const counter = await Counter.deploy();
        await counter.deployed();
    
        await counter.incrementByHundred();
        expect(await counter.count()).to.equal(100);
    });
})