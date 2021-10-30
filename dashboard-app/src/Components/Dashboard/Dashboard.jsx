import {react}from'react'
import './Dashboard.css';
import Balance from '../Balance/Balance';


const Dashboard=()=>{

    return(
        <div>
            
            <div class="background">
        <h1 class="heading">Rewards</h1>
        <button class="button">CONNECT WALLET</button>
        <p class="text">Rewards are distributed automatically every 1 hour. This may take awhile whenever there's not enough volume. the contract sells for rewards once it accumulated enough tokens. If you hold only a few CRYPT in your wallet, rewards might take sometime to reflect on your wallet. You can manually claim your rewards buy just paying the gas fee.</p>
        <div >
            
        <Balance/>
            
        </div>
        <div class="section2">
            <p class="title3">REWARDS NOT CLAIMED</p>
            <img class="icon3" src="busd.png" alt="busd"></img>
            <p class="ammount3">$452.21</p>
            <button class="claim">CLAIM MANUALLY</button>
        </div>

    </div>
                
            
        </div>
    );

}
export default Dashboard