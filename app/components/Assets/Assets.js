import React from 'react';
import styles from './Assets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register( ArcElement, Tooltip, Legend);

function Assets() {
    const data = {
        datasets: [{
            label: 'Asset',
            data: [60,6,20,14],
            backgroundColor: ['#4690EF','#002D67', '#00DCF9', '#1866CD'],
            borderColor: ['#4690EF','#002D67', '#00DCF9', '#1866CD'],
        }],
        labels: ['BTC', 'ETH', 'ADA', 'Others'],
        hoverOffset: 4
    }
    const options = {
        layout: {
            padding: 3,
        },
        cutout: 70,
        plugins: {
            legend: {
              position: 'bottom',
              labels: {
                    boxWidth: 10,
                    boxHeigth: 10,
                    borderRadius: 5,
                    font: {
                        size: 12,
                        weight: 'bold',
                      },
                }
            }
          }
    }
    return (
        <div className={styles.assetsWrapper}>
            <div className={styles.assetsHeader}>
                <h2>Assets</h2>
                <div className={styles.headerIconWrapper}>
                    <FontAwesomeIcon className={styles.menuIcon} icon={faEllipsis} />
                </div>
            </div>
            <div className={styles.assetsBody}>
                <Doughnut 
                    data={data} options={options}/>
            </div>
        </div>
    );
}

export default Assets;