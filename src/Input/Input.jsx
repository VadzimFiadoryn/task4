import React from 'react';
import Name from './Name/Name.jsx';
import styles from './Input.module.css';
import Qualitys from "./myQualities/Qualitis";

function App() {
    return (
        <div className={styles.Input}>
            <Name/>
            <Qualitys/>
        </div>
    );
}

export default App;
