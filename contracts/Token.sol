//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 < 0.9.0;

// debugging ( we can write js code in sol file )
import "../node_modules/hardhat/console.sol";

contract Token
{
    string public name ="Hardhat Token";
    string public symbol ="HHT";
    uint public totalSupply = 10000;

    address public owner;

    mapping(address=>uint) balances;

    constructor()
    {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to , uint amount) external
    {
        console.log("**Sender balance is %s token**", balances[msg.sender] );
        console.log("**Sender is sending %s tokens to %s addresss**" , amount , to);
        require(balances[msg.sender]>=amount , "Not enough tokens");
        balances[msg.sender]-=amount;
        balances[to]+=amount;
    }
    function balanceOf(address account) external view returns(uint)
    {
        return balances[account];
    }

}