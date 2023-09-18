import React from 'react';
import styles from './History.module.css';
import {statusIcon, Inc, Dec} from './History.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp,faArrowDown} from '@fortawesome/free-solid-svg-icons';

function History() {
    return (
        <div className={styles.historyWrapper}>
            <div className={styles.historyHeader}>
                <h2>History</h2>
                <button>View All</button>
            </div>
            <div className={styles.historyBody}>
                <table>
                    <tr>
                        <td>
                            <div className={styles.historyGrowthStatusInc}>
                                <FontAwesomeIcon className={statusIcon+' '+Inc} icon={faArrowDown} />
                            </div>
                        </td>
                        <td>
                            <h4>Deposit</h4>
                        </td>
                        <td>
                            <h4 className={Inc}>+$23,738</h4>
                        </td>
                        <td>
                            <h4>11:34 PM</h4>
                        </td>
                        <td>
                            <button className={styles.payStatusPadding}>Padding</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.historyGrowthStatusDec}>
                                <FontAwesomeIcon className={statusIcon+' '+Dec} icon={faArrowUp} />
                            </div>
                        </td>
                        <td>
                            <h4>Deposit</h4>
                        </td>
                        <td>
                            <h4 className={Dec}>+$23,738</h4>
                        </td>
                        <td>
                            <h4>11:34 PM</h4>
                        </td>
                        <td>
                            <button className={styles.payStatusSuccess}>Done</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.historyGrowthStatusInc}>
                                <FontAwesomeIcon className={statusIcon+' '+Inc} icon={faArrowDown} />
                            </div>
                        </td>
                        <td>
                            <h4>Deposit</h4>
                        </td>
                        <td>
                            <h4 className={styles.Inc}>+$23,738</h4>
                        </td>
                        <td>
                            <h4>11:34 PM</h4>
                        </td>
                        <td>
                            <button className={styles.payStatusSuccess}>Done</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.historyGrowthStatusDec}>
                                <FontAwesomeIcon className={statusIcon+' '+Dec} icon={faArrowUp} />
                            </div>
                        </td>
                        <td>
                            <h4>Deposit</h4>
                        </td>
                        <td>
                            <h4 className={styles.Dec}>+$23,738</h4>
                        </td>
                        <td>
                            <h4>11:34 PM</h4>
                        </td>
                        <td>
                            <button className={styles.payStatusSuccess}>Done</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default History;