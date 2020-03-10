import React from 'react';
import styles from './Quality.module.css';

function Qualitys() {
    const Quality = ['skill ', 'skill ', 'skill '];
    const arrQ = Quality.map((el, num) => <div key={num}>  {el}  </div>)
    return (
        <div className={styles.Quality}>
            {arrQ}
        </div>
    );
}

export default Qualitys;
