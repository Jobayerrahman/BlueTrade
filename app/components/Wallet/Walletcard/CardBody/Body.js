import React from 'react';
import styles from './Body.module.css';
import Image from 'next/image';
import { useContext } from 'react';
import WalletContext from '@/app/libs/Context/WalletContext';

function Body() {
    const context = useContext(WalletContext);
    const { totalAmount } = context;
    return (
        <div className={styles.bodyWrapper}>
            <h2>{totalAmount}</h2>
            <Image/>
        </div>
    );
}

export default Body;