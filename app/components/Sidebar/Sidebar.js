import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import {sidebarWrapper, closeSideBarWrapper, closeSideBar, menuIcon, closeMenuIcon, sideBarFooter, closeSideBarFooter} from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faClone, faUser, faCircleQuestion, faCircleRight, faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { faGear, faRepeat,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    const [ sideBarClose, setSideBarClose] = useState(true)

    const handleSideBarToggle = (e) =>{
        e.preventdefault;
        setSideBarClose(!sideBarClose)
    }
    return (
        <div className={sideBarClose ? sidebarWrapper : closeSideBarWrapper}>
            <div className={styles.sidebarMenuWrapper}>
                <div className={styles.sidebarHeader}>
                    <h2>Blue<span className={sideBarClose ? null:closeSideBar}>Trade</span></h2>
                </div>
                <div className={styles.sidebarMenu}>
                    <ul>
                        <li className={styles.active}>
                            <FontAwesomeIcon className={sideBarClose ? menuIcon : closeMenuIcon} icon={faClone} />
                            <h2 className={sideBarClose ? null:closeSideBar}>Dashboad</h2>
                        </li>
                        <li>
                            <FontAwesomeIcon className={sideBarClose ? menuIcon : closeMenuIcon} icon={faBell} />
                            <h2 className={sideBarClose ? null:closeSideBar}>Markets</h2>
                        </li>
                        <li>
                            <FontAwesomeIcon className={sideBarClose ? menuIcon : closeMenuIcon} icon={faRepeat} />
                            <h2 className={sideBarClose ? null:closeSideBar}>Transactions</h2>
                        </li>
                        <li>
                            <FontAwesomeIcon className={sideBarClose ? menuIcon : closeMenuIcon} icon={faUser} />
                            <h2 className={sideBarClose ? null:closeSideBar}>Profile</h2>
                        </li>
                        <li>
                            <FontAwesomeIcon className={sideBarClose ? menuIcon : closeMenuIcon} icon={faGear} />
                            <h2 className={sideBarClose ? null:closeSideBar}>Setting</h2>
                        </li>
                    </ul>
                </div>
                <div className={styles.sidebarDivider}></div>
                <div className={styles.sidebarMenu}>
                    <ul>
                        <li>
                            <FontAwesomeIcon className={sideBarClose ? menuIcon : closeMenuIcon} icon={faCircleQuestion} />
                            <h2 className={sideBarClose ? null:closeSideBar}>Help</h2>
                        </li>
                        <li>
                            <FontAwesomeIcon className={sideBarClose ? menuIcon : closeMenuIcon} icon={faArrowRightFromBracket} />
                            <h2 className={sideBarClose ? null:closeSideBar}>Logout</h2>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={sideBarClose ? sideBarFooter : closeSideBarFooter}>
                {sideBarClose ? <FontAwesomeIcon 
                                    onClick={handleSideBarToggle} 
                                    className={styles.sideBarToggleIcon}
                                    icon={faCircleRight} />
                                : <FontAwesomeIcon 
                                onClick={handleSideBarToggle} 
                                className={styles.closeSideBarToggleIcon} 
                                icon={faCircleLeft} />
                                }
                {sideBarClose ? <FontAwesomeIcon className={styles.sideBarToggleIcon} icon={faArrowRightFromBracket} /> : null}
            </div>
        </div>
    );
}

export default Sidebar;