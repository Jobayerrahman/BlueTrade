import React from 'react';
import styles from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faClone, faUser, faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faGear, faRepeat,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Sidebar(props) {
    return (
        <div className={styles.sidebarWrapper}>
            <div className={styles.sidebarHeader}>
                <h2>Blue<span>Trade</span></h2>
            </div>
            <div className={styles.sidebarMenu}>
                <ul>
                    <li className={styles.active}>
                        <FontAwesomeIcon className={styles.menuIcon} icon={faClone} />
                        <h2>Dashboad</h2>
                    </li>
                    <li>
                        <FontAwesomeIcon className={styles.menuIcon} icon={faBell} />
                        <h2>Markets</h2>
                    </li>
                    <li>
                        <FontAwesomeIcon className={styles.menuIcon} icon={faRepeat} />
                        <h2>Transactions</h2>
                    </li>
                    <li>
                        <FontAwesomeIcon className={styles.menuIcon} icon={faUser} />
                        <h2>Profile</h2>
                    </li>
                    <li>
                        <FontAwesomeIcon className={styles.menuIcon} icon={faGear} />
                        <h2>Setting</h2>
                    </li>
                </ul>
            </div>
            <div className={styles.sidebarDivider}></div>
            <div className={styles.sidebarMenu}>
                <ul>
                    <li>
                        <FontAwesomeIcon className={styles.menuIcon} icon={faCircleQuestion} />
                        <h2>Help</h2>
                    </li>
                    <li>
                        <FontAwesomeIcon className={styles.menuIcon} icon={faArrowRightFromBracket} />
                        <h2>Logout</h2>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;