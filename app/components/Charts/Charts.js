import React from 'react';
import styles from './Charts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  import { faker } from '@faker-js/faker';
  
  
function Charts() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
        
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };
        
    const labels = ['Jul 18', 'Jul 20', 'Jul 22', 'Jul 24', 'Jul 26'];
    
    const data = {
        labels,
        datasets: [
            {
              data: labels.map(() => faker.datatype.number({ min: 19000, max: 23000 })),
              backgroundColor: '#032658',
            },
            {
              data: labels.map(() => faker.datatype.number({ min: 19000, max: 23000 })),
              backgroundColor: '#0c428f',
            },
          ],
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
            <div className={styles.chartsBody}>
                <Bar data={data} options={options} height={80}/>
            </div>
        </div>
    );
}

export default Charts;