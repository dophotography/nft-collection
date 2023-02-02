require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const POLYSCAN = process.env.POLYSCAN;

module.exports = {

  solidity: {
    version: "0.8.4",
  },

  networks: {
    mumbai: {
      url: `https://hidden-purple-violet.matic-testnet.discover.quiknode.pro/${QUICKNODE_HTTP_URL}/`,
      accounts: [PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: POLYSCAN,
  },

};
