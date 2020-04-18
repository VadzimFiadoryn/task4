import React from 'react';
import Name from '../Name/Name.jsx';
import styles from '../App.module.css';
import Qualitys from "../myQualities/Qualitys";
import InputForm from "../Input/InputForm";

class FirstTask extends React.Component {
    state = {
        Names: [],
    };

    updateData = (name) => {
        {
            this.setState({Names: [...this.state.Names,  "hi, " + name]});
        }
    }

    render() {
        const newNemes =
            this.state.Names.map((el, key) => <div key={key}>{el} </div>)
        return (
            <div className={styles.FirstTask}>
                <Name/>
                <Qualitys/>
                <InputForm updateData={this.updateData}/>
                {newNemes}
            </div>
        );
    }
}

export default FirstTask;
