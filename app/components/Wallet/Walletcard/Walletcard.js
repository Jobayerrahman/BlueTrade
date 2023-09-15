import React from 'react';
import Header from './CardHeader/Header';
import Body from './CardBody/Body';
import Footer from './CardFooter/Footer';
import styles from './Walletcard.module.css';

function Walletcard(props) {
    return (
        <div className={styles.wellCardWrapper}>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default Walletcard;