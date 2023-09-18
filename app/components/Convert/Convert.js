import React from 'react';
import styles from './Convert.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsis,faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Convert() {
    const [currency, setCurrency] = useState('');

    const handleInput = (e) =>{
        if(e.target.type ==='text'){
            const inputValue = e.target.value;
            setCurrency(inputValue);
        }
    }

    return (
        <div className={styles.convertWrapper}>
            <div className={styles.convertHeader}>
                <h2>Convert</h2>
                <div className={styles.headerIconWrapper}>
                    <FontAwesomeIcon className={styles.menuIcon} icon={faEllipsis} />
                </div>
            </div>
            <div className={styles.convertCurrencyInputWrapper}>
                <input className={styles.currencyInput} type="text" value={currency} onChange={handleInput}/>
                <button className={styles.currencyButton} style={{ backgroundColor: '#C7E4DB', color:'#26AB5F' }}>
                    USDT 
                    <FontAwesomeIcon className={styles.menuIcon} icon={faCaretDown} />
                </button>
            </div>
            <div className={styles.convertCurrencyInputWrapper}>
                <input className={styles.currencyInput} type="text" value={currency} onChange={handleInput}/>
                <button className={styles.currencyButton} style={{ backgroundColor: '#FCF4DB', color:'#FF7C04' }}>
                    BTC
                    <FontAwesomeIcon className={styles.menuIcon} icon={faCaretDown} />
                </button>
            </div>
            <button className={styles.convertButton}>Convert Now</button>
            <p>The ultimate price and output is determined by the amount of tokens in the pool at the time of your swap.</p>
        </div>
    );
}

export default Convert;