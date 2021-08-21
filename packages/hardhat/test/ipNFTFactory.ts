import { ethers, getNamedAccounts } from "hardhat";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { solidity } from "ethereum-waffle";
import {
  IpNftFactory__factory,
  IpNftFactory,
  IpNft,
} from "../../frontend/types/typechain";
import { Signer } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signers";

chai.use(solidity);
chai.use(chaiAsPromised).should();
const { expect } = chai;

describe("Royalty Free NFT", function () {
  let ipNftFactory: IpNftFactory;
  let childContractAddress1: string[];
  let childContract1: IpNft;
  let owner: SignerWithAddress;
  let licensor: SignerWithAddress;
  let licensee: SignerWithAddress;
  let nonLicensee: SignerWithAddress;

  beforeEach(async function () {
    // 1
    [owner, licensor, licensee, nonLicensee] = await ethers.getSigners();

    // 2
    const factory = (await ethers.getContractFactory(
      "IpNftFactory"
    )) as unknown as IpNftFactory__factory;
    ipNftFactory = await factory.deploy();
  });

  describe("Factory of IpNft contracts deployment", function () {
    it("Should have proper owner", async function () {
      expect(await ipNftFactory.owner()).to.equal(owner.address);
    });
  });
  describe("Deploy Child Contract", function () {
    it("Should generate new contract", async function () {
      await ipNftFactory
        .connect(licensor as Signer)
        .newIpNft(
          "Test",
          "Test",
          "QmTwx4sLHk432eDqe54CX3Jij2isStJDpe6ey8eBRTYFZq"
        );
      childContractAddress1 = await ipNftFactory.getChildren();
      expect(
        await ipNftFactory.IpNftContracts(childContractAddress1[0])
      ).to.equal(true);
    });
    it("Should have proper owner", async function () {
      childContract1 = (await ethers.getContractAt(
        "IpNft",
        childContractAddress1[0]
      )) as unknown as IpNft;
      expect(await childContract1.owner()).to.equal(licensor.address);
    });
    it("Should have proper name", async function () {
      expect(await childContract1.name()).to.equal("Test");
    });
    it("Should have proper symbol", async function () {
      expect(await childContract1.symbol()).to.equal("Test");
    });
  });
  describe("Should mint NFT as a license", async function () {
    it("Should mint a license for correct price", async function () {
      childContract1.connect(licensee).licenseIP({
        value: ethers.utils.parseEther("0.01"),
      }).should.be.fulfilled;
    });

    it("Should reject a license for to low of price", async function () {
      await expect(
        childContract1.connect(licensee).licenseIP({
          value: ethers.utils.parseEther("0.009"),
        })
      ).to.be.rejected;
    });
    it("Should reject a license for to high of price", async function () {
      await expect(
        childContract1.connect(licensee).licenseIP({
          value: ethers.utils.parseEther("0.011"),
        })
      ).to.be.rejected;
    });
    it("Should have proper token URI", async function () {
      expect(await childContract1.tokenURI(1)).to.equal(
        "ipfs://QmTwx4sLHk432eDqe54CX3Jij2isStJDpe6ey8eBRTYFZq"
      );
    });
    it("Should have license owned by licensee address", async function () {
      expect(await childContract1.ownerOf("1")).to.equal(licensee.address);
    });

    it("Should have Transfer function disabled", async function () {
      await expect(
        childContract1.connect(licensee).transferFrom(
          licensee.address, // from
          nonLicensee.address, // to
          1 // tokenId
        )
      ).to.be.reverted;
    });

    it("Should have safeTransfer function disabled", async function () {
      await expect(
        childContract1.connect(licensee).transferOwnership(nonLicensee.address)
      ).to.be.reverted;
    });
  });
});
