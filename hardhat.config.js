/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle")

const ALCHEMY_API_KEY = "iBXG6h7e7OdRA4EsCWbyi-ZsNo9MpXkS";
const SEPOLIA_PRIVATE_KEY = "a0c9df4a479589a2275166980facbaf3f343f8a0836eb8619255a5bdbf51c59c";
module.exports = {
  solidity: "0.8.19",

  networks:
  {
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${SEPOLIA_PRIVATE_KEY}`],
    }
  }
};
