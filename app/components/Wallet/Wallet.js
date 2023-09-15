import React from 'react';
import styles from './Wallet.module.css'
import Walletcard from './Walletcard/Walletcard';
import Balancecard from './Walletcard/Balancecard';
import WalletContext from '@/app/libs/Context/WalletContext';
import { faWallet, faBitcoinSign, faStrikethrough } from '@fortawesome/free-solid-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
function Wallet() {
    return (
        <div className={styles.walletWrapper}>
            <WalletContext.Provider 
                value={{ title: "Estimated Balance",
                    subTitle: null, 
                    totalAmount: "$123,987", 
                    icon : faWallet, 
                    periodicalTitle: "Monthly Profit", 
                    periodicalAmount:"+$2560.78", 
                    periodicalPercentage:"+14.67%",
                    periodicalStatus: true}}>
                <Balancecard/>
            </WalletContext.Provider>
            <WalletContext.Provider 
                value={{ title: "BTCUSDT",
                    subTitle: "Bitcoin", 
                    totalAmount: "$23,987", 
                    icon : faBitcoinSign, 
                    periodicalTitle: "PNL Daily", 
                    periodicalAmount:"-$16.78", 
                    periodicalPercentage:"+14.67%",
                    periodicalStatus: false}}>
                <Walletcard/>
            </WalletContext.Provider>
            <WalletContext.Provider 
                value={{ title: "ETHUSDT",
                    subTitle: "Ethereum", 
                    totalAmount: "$23,987", 
                    icon : faEthereum, 
                    periodicalTitle: "PNL Daily", 
                    periodicalAmount:"-$16.78", 
                    periodicalPercentage:"+14.67%",
                    periodicalStatus: true}}>
                <Walletcard/>
            </WalletContext.Provider>
            <WalletContext.Provider 
                value={{ title: "SOLUSDT",
                    subTitle: "Solana", 
                    totalAmount: "$23,987", 
                    icon : faStrikethrough, 
                    periodicalTitle: "PNL Daily", 
                    periodicalAmount:"-$16.78", 
                    periodicalPercentage:"+14.67%",
                    periodicalStatus: true}}>
                <Walletcard/>
            </WalletContext.Provider>
        </div>
    );
}

export default Wallet;