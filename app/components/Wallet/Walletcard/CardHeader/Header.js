import React from 'react';
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import WalletContext from '@/app/libs/Context/WalletContext';

function Header() {
    const context = useContext(WalletContext);
    const { icon, title, subTitle } = context;
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.walletIconWrapper}>
                <FontAwesomeIcon className={styles.walletIcon} icon={icon} />
            </div>
            <div className={styles.headerInfo}>
                <h2>{title}</h2>
                <span>{subTitle}</span>
            </div>
        </div>
    );
}

export default Header;