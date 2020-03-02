import React from 'react';
import styles from './Qualiti.module.css';

function Quality(props) {
    return (
        <div className={styles.Qualiti}>
            {props.quality}
        </div>
    );
}

export default Quality;
