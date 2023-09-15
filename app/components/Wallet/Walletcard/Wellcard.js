import React from 'react';
import styles from './Wellcard.module.css'
import Header from './CardHeader/Header';
import Footer from './CardFooter/Footer';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import Body from './CardBody/Body';

function Wellcard(props) {
    return (
        <div className={styles.wellCardWrapper}>
            <Header icon={faWallet} title="Estimated Balance"/>
            <Body inc="false"totalAmount="$23,738"/>
            <Footer inc="true" title="Monthly Profit" amount="+$2560.78" percentage="+14.67%"/>
        </div>
    );
}

export default Wellcard;