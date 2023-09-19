import React from 'react';
import styles from './Convert.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsis,faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Convert() {
    const [currency, setCurrency] = useState('');
    const [openUSDT, setOpenUSDT] = React.useState(false);
    const [openBTC, setOpenBTC] = React.useState(false);

    const handleUSDTOpen = () => {
        setOpenUSDT(!openUSDT);
    };

    const handleBTCOpen = () => {
        setOpenBTC(!openBTC);
    };

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
                <div className={styles.currencyDropdownUSDT}>
                    <div onClick={handleUSDTOpen} className={styles.currencyDropdownHeader}>
                        USDT 
                        <FontAwesomeIcon className={styles.menuIcon} icon={faCaretDown} />
                    </div>
                    {openUSDT ? (
                        <div className={styles.currencyDropdownBody}>
                            <div className={styles.currencyDropdownItem}>Menu 1</div>
                            <div className={styles.currencyDropdownItem}>Menu 2</div>
                            <div className={styles.currencyDropdownItem}>Menu 3</div>
                        </div>
                    ) : null}
                </div>
            </div>
            <div className={styles.convertCurrencyInputWrapper}>
                <input className={styles.currencyInput} type="text" value={currency} onChange={handleInput}/>
                <div className={styles.currencyDropdownBTC}>
                    <div onClick={handleBTCOpen} className={styles.currencyDropdownHeader}>
                        BTC
                        <FontAwesomeIcon className={styles.menuIcon} icon={faCaretDown} />
                    </div>
                    {openBTC ? (
                        <div className={styles.currencyDropdownBody}>
                            <div className={styles.currencyDropdownItem}>Menu 1</div>
                            <div className={styles.currencyDropdownItem}>Menu 2</div>
                            <div className={styles.currencyDropdownItem}>Menu 3</div>
                        </div>
                    ) : null}
                </div>
            </div>
            <button className={styles.convertButton}>Convert Now</button>
            <p>The ultimate price and output is determined by the amount of tokens in the pool at the time of your swap.</p>
        </div>
    );
}

export default Convert;