import Sidebar from '@/app/components/Sidebar/Sidebar';
import Topmenu from '@/app/components/Topmenu/Topmenu';
import Wallet from '@/app/components/Wallet/Wallet';
import styles from './DeshboardPage.module.css' 
import React from 'react';

function DeshboardPage(props) {
    return (
        <div className={styles.dashboardMenu}>
            <Sidebar/>
            <div className={styles.dashboardWrapper}>
                <Topmenu/>
                <Wallet/>
            </div>
        </div>
    );
}

export default DeshboardPage;