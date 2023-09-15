import React from 'react';
import styles from './Footer.module.css'
import { useContext } from 'react';
import WalletContext from '@/app/libs/Context/WalletContext';
function Footer() {
    const context = useContext(WalletContext);
    const { periodicalTitle, periodicalAmount, periodicalPercentage, periodicalStatus } = context;
    return (
        <div className={styles.footerWrapper}>
            <h2 className={styles.footerTitle}>{periodicalTitle}</h2>
            <h2 className={ periodicalStatus ? styles.footerAmountInc : styles.footerAmountDec }>{periodicalAmount}</h2>
            <div className={ periodicalStatus ? styles.footerPercentageInc : styles.footerPercentageDec }>
                <h2>{periodicalPercentage}</h2>
            </div>
        </div>
    );
}

export default Footer;