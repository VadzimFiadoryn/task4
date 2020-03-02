import React from 'react';
import styles from './Button.module.css'
function InputButton(props) {
    return (
        <div className={styles.Button}>
            <button onClick={() => props.updateData()}>ADD</button>
        </div>
    );
}

export default InputButton;
