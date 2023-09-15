import React from 'react';
import styles from './Wellcard.module.css'
import Header from './CardHeader/Header';
import Footer from './CardFooter/Footer';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
function Balancecard({totalAmount}) {
    return (
        <div className={styles.wellCardWrapper}>
            <Header icon={faWallet} title="Estimated Balance"/>
            <h2 style={{fontSize:"30px", marginBottom:"15px"}}>$123,987</h2>
            <Footer/>
        </div>
    );
}

export default Balancecard;