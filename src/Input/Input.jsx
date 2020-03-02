import React from 'react';
import Name from './Name/Name.jsx';
import styles from './App.module.css';
import Qualitys from "./myQualities/Qualitis";

function App() {
    return (
        <div className={styles.app}>
            <Name/>
            <Qualitys/>
        </div>
    );
}

export default App;
