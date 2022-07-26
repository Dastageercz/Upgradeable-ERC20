const { ethers, upgrades } = require("hardhat");

const UPGRADEABLE_PROXY = "0xa7Bb29e91eA197028b4697AFf51D08bc91103e82";

const main = async() => {
   const V2Contract = await ethers.getContractFactory("ERC20v2");
   console.log("Upgrading V1Contract...");
   let upgrade = await upgrades.upgradeProxy(UPGRADEABLE_PROXY, V2Contract);
   console.log("V1 Upgraded to V2");
   console.log("V2 Contract Deployed To:", upgrade.address)
}

main().catch((error) => {
   console.error(error);
   process.exitCode = 1;
});
