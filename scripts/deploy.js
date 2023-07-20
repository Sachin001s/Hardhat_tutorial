async function main() {
    const [deployer] = await ethers.getSigners();
  
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
    console.log("Token address:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

    // Token address: 0xb52FDbeC2EB41bf5695de8e81A99aa47C4b87782KO