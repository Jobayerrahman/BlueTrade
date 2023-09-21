import Sidebar from '@/app/components/Sidebar/Sidebar';
import Topmenu from '@/app/components/Topmenu/Topmenu';
import Wallet from '@/app/components/Wallet/Wallet';
import styles from './DeshboardPage.module.css' 
import React from 'react';
import Assets from '@/app/components/Assets/Assets';
import Convert from '@/app/components/Convert/Convert';
import History from '@/app/components/History/History';
import Markets from '@/app/components/Markets/Markets';
import Charts from '@/app/components/Charts/Charts';

function DeshboardPage(props) {
    return (
        <div className={styles.dashboardWrapper}>
            <Sidebar/>
            <div className={styles.dashboardMenuWrapper}>
                <Topmenu/>
                <div className={styles.dashboardContentsWrapper}>
                    <Wallet/>
                    <div className={styles.dashboardContentCardsWrapper}>
                        <Charts/>
                        <Markets/>
                        <Assets/>
                        <Convert/>
                        <History/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeshboardPage;