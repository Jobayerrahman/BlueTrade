import React from 'react';
import styles from './Wallet.module.css'
import Wellcard from './Walletcard/Wellcard';
import Balancecard from './Walletcard/Balancecard';
import WalletContext from '@/app/libs/Context/WalletContext';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
function Wallet(props) {
    return (
        <div className={styles.walletWrapper}>
            <WalletContext 
                value={{ title: "Estimated Balance", 
                    totalAmount: "$123,987", 
                    icon : faWallet, 
                    periodicalTitle: "Monthly Profit", 
                    periodicalAmount:"+$2560.78", 
                    periodicalPercentage:"+14.67%",
                    periodicalStatus:"True"}}>
                <Balancecard/>
            </WalletContext>
        </div>
    );
}

export default Wallet;