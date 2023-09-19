import React from 'react';
import styles from './Charts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Charts() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <div className={styles.chartsWrapper}>
            <div className={styles.chartsHeader}>
                <div className={styles.chartsDropdown}>
                    <div onClick={handleOpen} className={styles.chartsDropdownHeader}>
                        <div className={styles.chartsDropdownCurrency}>
                            <h2>BTCUSDT</h2>
                            <span>Bitcoin</span>
                        </div>
                        <div className={styles.chartsDropdownAmount}>
                            <h2>$23,738</h2>
                            <div className={styles.chartsDropdownPercentage}>
                                <h4>+23,6%</h4>
                            </div>
                        </div>
                        <FontAwesomeIcon className={styles.menuIcon} icon={faCaretDown} />
                    </div>
                    {open ? (
                        <div className={styles.chartsDropdownBody}>
                            <div className={styles.chartsDropdownItem}>
                                <div className={styles.chartsDropdownCurrency}>
                                    <h2>BTCUSDT</h2>
                                    <span>Bitcoin</span>
                                </div>
                                <div className={styles.chartsDropdownAmount}>
                                    <h2>$23,738</h2>
                                    <div className={styles.chartsDropdownPercentage}>
                                        <h4>+23,6%</h4>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.chartsDropdownItem}>
                                <div className={styles.chartsDropdownCurrency}>
                                    <h2>BTCUSDT</h2>
                                    <span>Bitcoin</span>
                                </div>
                                <div className={styles.chartsDropdownAmount}>
                                    <h2>$23,738</h2>
                                    <div className={styles.chartsDropdownPercentage}>
                                        <h4>+23,6%</h4>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.chartsDropdownItem}>
                                <div className={styles.chartsDropdownCurrency}>
                                    <h2>BTCUSDT</h2>
                                    <span>Bitcoin</span>
                                </div>
                                <div className={styles.chartsDropdownAmount}>
                                    <h2>$23,738</h2>
                                    <div className={styles.chartsDropdownPercentage}>
                                        <h4>+23,6%</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
                <div className={styles.chartsMenu}>
                    <button className={styles.active}>1hr</button>
                    <button>2hr</button>
                    <button>3hr</button>
                    <button>1W</button>
                    <button>1M</button>
                </div>
            </div>
        </div>
    );
}

export default Charts;