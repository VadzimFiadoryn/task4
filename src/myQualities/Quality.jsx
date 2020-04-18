import React from 'react';
import styles from './Quality.module.css';

function Quality(props) {
    return (
        <div className={styles.Quality}>
            {props.el}
        </div>
    );
}

export default Quality;
