var  greeter  = artifacts.require("./greeter1.sol");

module.exports = function(deployer) {
  deployer.deploy(greeter, ‘Hi Hello’,{gas:6700000});
};
