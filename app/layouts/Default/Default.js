import React from 'react';
import Header from '@/app/modules/Header/Header';
import styles from './Default.module.css'
function Default({children}) {
    return (
        <div className={styles.default}>
            <Header/>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Default;