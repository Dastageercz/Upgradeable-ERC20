const { ethers, upgrades } = require("hardhat");

const main = async() => {
  const ERC20v1 = await ethers.getContractFactory("ERC20v1");
  console.log("Deploying V1contract...");

  const v1contract = await upgrades.deployProxy(ERC20v1);
  await v1contract.deployed();
  
  console.log("V1 Contract deployed to:", v1contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
