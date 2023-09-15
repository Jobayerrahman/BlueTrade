import React from 'react';
import styles from './Body.module.css';
import Image from 'next/image';

function Body({totalAmount=null}) {
    return (
        <div className={styles.bodyWrapper}>
            <h2>{totalAmount}</h2>
            <Image/>
        </div>
    );
}

export default Body;