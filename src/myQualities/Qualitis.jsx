import React from 'react';
import styles from './Qualiti.module.css';
import Quality from "./Qualiti";

class Qualitys extends React.Component {
    state = ['bImon', 'e', 'ruch'];

    render() {
        const componentaQualitys = this.state.map((el, key) => <Quality quality={el} key = {key}/>)
        return (
            <div className={styles.Qualiti}>
                {componentaQualitys}
            </div>);
    }
}

export default Qualitys;
