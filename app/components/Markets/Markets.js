import React from 'react';
import styles from './Market.module.css';
import { Inc, Dec } from './Market.module.css';

function Markets() {
    return (
        <div className={styles.marketsWrapper}>
            <div className={styles.marketHeader}>
                <h2>Markets</h2>
                <div className={styles.marketMenu}>
                    <button className={styles.active}>All</button>
                    <button>Metaverse</button>
                    <button>Gaming</button>
                    <button>Defi</button>
                    <button>NFT</button>
                </div>
            </div>
            <div className={styles.marketsBody}>
            <table>
                    <tr>
                        <td>
                            <h4>BTCUSDT</h4>
                        </td>
                        <td>
                            <h4>Bitcoin</h4>
                        </td>
                        <td>
                            <h4> $23,495 </h4>
                        </td>
                        <td>
                            <h4 className={Inc}>+23.4%</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4>BTCUSDT</h4>
                        </td>
                        <td>
                            <h4>Bitcoin</h4>
                        </td>
                        <td>
                            <h4> $23,495 </h4>
                        </td>
                        <td>
                            <h4 className={Dec}>-7.8%%</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4>BTCUSDT</h4>
                        </td>
                        <td>
                            <h4>Bitcoin</h4>
                        </td>
                        <td>
                            <h4> $23,495 </h4>
                        </td>
                        <td>
                            <h4 className={Dec}>-7.8%%</h4>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h4>BTCUSDT</h4>
                        </td>
                        <td>
                            <h4>Bitcoin</h4>
                        </td>
                        <td>
                            <h4> $23,495 </h4>
                        </td>
                        <td>
                            <h4 className={Dec}>-7.8%%</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4>BTCUSDT</h4>
                        </td>
                        <td>
                            <h4>Bitcoin</h4>
                        </td>
                        <td>
                            <h4> $23,495 </h4>
                        </td>
                        <td>
                            <h4 className={Dec}>-7.8%%</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4>BTCUSDT</h4>
                        </td>
                        <td>
                            <h4>Bitcoin</h4>
                        </td>
                        <td>
                            <h4> $23,495 </h4>
                        </td>
                        <td>
                            <h4 className={Dec}>-7.8%%</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4>BTCUSDT</h4>
                        </td>
                        <td>
                            <h4>Bitcoin</h4>
                        </td>
                        <td>
                            <h4> $23,495 </h4>
                        </td>
                        <td>
                            <h4 className={Dec}>-7.8%%</h4>
                        </td>
                    </tr>
                </table>
            </div>
            <div style={{ textAlign: 'right'}}>
                <button className={styles.marketView}>View All</button>
            </div>
        </div>
    );
}

export default Markets;