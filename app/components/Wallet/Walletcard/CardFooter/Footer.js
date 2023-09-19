import React from 'react';
import styles from './Footer.module.css'
import { useContext } from 'react';
import WalletContext from '@/app/libs/Context/WalletContext';
function Footer() {
    const context = useContext(WalletContext);
    const { periodicalTitle, periodicalAmount, periodicalPercentage, periodicalStatus } = context;
    return (
        <div className={styles.footerWrapper}>
            <h4 className={styles.footerTitle}>{periodicalTitle}</h4>
            <h4 className={ periodicalStatus ? styles.footerAmountInc : styles.footerAmountDec }>{periodicalAmount}</h4>
            <div className={ periodicalStatus ? styles.footerPercentageInc : styles.footerPercentageDec }>
                <h4>{periodicalPercentage}</h4>
            </div>
        </div>
    );
}

export default Footer;