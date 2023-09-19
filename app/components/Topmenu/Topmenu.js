import React from 'react';
import styles from './Topmenu.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import profile from '../../../public/Image/profile.png';
import Image from 'next/image';
import ThemeContext from '@/app/libs/Context/ThemeContext';
import { useContext } from 'react';
import { faMagnifyingGlass, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

function Topmenu(props) {
    const [search, setSearch] = useState('');

    const context = useContext(ThemeContext);
    const { mode, switchTheme } = context;

    const handleInput = (e) =>{
        if(e.target.type ==='text'){
            const inputValue = e.target.value;
            setSearch(inputValue);
        }
    }
    return (
        <div className={styles.topMenuWrapper}>
            <div className={styles.searchWrapper}>
                <input className={styles.searchInput} type="text" value={search} onChange={handleInput} placeholder='Search...'/>
                <FontAwesomeIcon className={styles.searchIcon} icon={faMagnifyingGlass} />
            </div>
            <div className={styles.menuWrapper}>
                <div>
                    <FontAwesomeIcon className={styles.themeIcon} onClick={switchTheme} icon={mode} />
                </div>
                <div className={styles.menuIconWrapper}>
                    <FontAwesomeIcon className={styles.menuIcon} onClick={switchTheme} icon={faBell} />
                    <span className={styles.activeCircle}></span>
                </div>
                <div className={styles.profileWrapper}>
                    <div className={styles.profileInfo}>
                        <div className={styles.profileImageWrapper}>
                            <Image className={styles.profileImage}  src={profile} alt=''/>
                        </div>
                        <div className={styles.profileDetails}>
                            <h2>Andy Warhol</h2>
                            <span>andywarhol@mail.com</span>
                        </div>
                    </div>
                    <div className={styles.profileDropIcon}>
                        <FontAwesomeIcon className={styles.ellipsisIcon} icon={faEllipsisVertical} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topmenu;