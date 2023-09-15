import React from 'react';
import styles from './Walletcard.module.css'
import Header from './CardHeader/Header';
import Footer from './CardFooter/Footer';
import { useContext } from 'react';
import WalletContext from '@/app/libs/Context/WalletContext';

function Balancecard() {
    const context = useContext(WalletContext);
    const {totalAmount} = context;
    return (
        <div className={styles.wellCardWrapper}>
            <Header/>
            <h2 style={{fontSize:"30px", marginBottom:"15px"}}>{totalAmount}</h2>
            <Footer/>
        </div>
    );
}

export default Balancecard;