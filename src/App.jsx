import React from 'react';
import Name from './Name/Name.jsx';
import styles from './App.module.css';
import Qualitys from "./myQualities/Qualitis";
import Input from "./Input/Input";

class App extends React.Component {
    state = {Names: []};
    refLinkInput = React.createRef();
    updateData = () => {
        let newName = this.refLinkInput.current.value;
        let namesArr = [...this.state.Names, newName]
        this.setState({Names: namesArr})
        this.refLinkInput.current.value = "";
    };

    render() {
        const newNemes =
            this.state.Names.map((el, key) => <div key={key}>{el} </div>)
        return (
            <div className={styles.app}>
                <Name/>
                <Qualitys/>
                <Input updateData={this.updateData} refLinkInput={this.refLinkInput}/>
                {newNemes}
            </div>
        );
    }
}

export default App;
