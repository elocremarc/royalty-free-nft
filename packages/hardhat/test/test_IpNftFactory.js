const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);

describe("Royalty Free NFT", function () {
  let IpNftFactory;
  let childContractAddress1;
  let childContract1;
  let owner;
  let licensor;
  let licensee;

  beforeEach(async function () {
    [owner, licensor, licensee] = await ethers.getSigners();
  });

  describe("Factory to deploy IpNft contracts", function () {
    it("Should deploy IpNftFactory", async function () {
      const parentContract = await ethers.getContractFactory("IpNftFactory");

      IpNftFactory = await parentContract.deploy();
    });
    it("Should have proper owner", async function () {
      expect(await IpNftFactory.owner()).to.equal(owner.address);
    });
    describe("Deploy Child Contract", function () {
      it("Should generate new contract", async function () {
        const newIpNftArgs = ["Test", "Test", "google.com"];
        await IpNftFactory.connect(licensor).newIpNft(...newIpNftArgs);
        childContractAddress1 = await IpNftFactory.getChildren();
        expect(
          await IpNftFactory.IpNftContracts(childContractAddress1[0])
        ).to.equal(true);
      });
      it("Should have proper owner", async function () {
        childContract1 = await ethers.getContractAt(
          "IpNft",
          childContractAddress1[0]
        );
        expect(await childContract1.owner()).to.equal(licensor.address);
      });
      it("Should have proper name", async function () {
        expect(await childContract1.name()).to.equal("Test");
      });
      it("Should have proper symbol", async function () {
        expect(await childContract1.symbol()).to.equal("Test");
      });
      it("Should have proper URI", async function () {
        expect(await childContract1.baseURI()).to.equal("google.com");
      });
      it("Should mint a licnese for correct price", async function () {
        await childContract1.connect(licensee).licenseIP({
          value: BigInt(ethers.utils.parseEther("0.01")),
        });
      });
      it("Should have NFT owned by licensee address", async function () {
        expect(await childContract1.ownerOf("1")).to.equal(licensee.address);
      });
    });
  });
});
