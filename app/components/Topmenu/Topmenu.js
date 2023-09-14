import React from 'react';
import styles from './Topmenu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

function Topmenu(props) {
    return (
        <div className={styles.topMenuWrapper}>
            <div className={styles.searchWrapper}>
                <input value="Search"/>
            </div>
            <div className={styles.menuWrapper}>
                <div className={styles.menuIconWrapper}>
                    <FontAwesomeIcon className={styles.menuIcon} icon={faBell} />
                </div>
                <div className={styles.profileWrapper}>
                    <h2>Profile</h2>
                </div>
            </div>
        </div>
    );
}

export default Topmenu;