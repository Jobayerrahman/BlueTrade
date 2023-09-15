import React from 'react';
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Header({icon=null, title=null, subTitle=null}) {
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